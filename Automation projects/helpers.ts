
import { Locator } from '@playwright/test';
import { Page } from '@playwright/test';
import { PNG } from 'pngjs';
import fs from 'fs';
import path from 'path';
import { authenticator } from 'otplib';

//---------------URL normalization function-------------------


export function normalizeUrl(url: string): string {
  if (!url) return url;

  // Check if the URL already starts with http or https
  if (/^https?:\/\//i.test(url)) {
    return url;
  }

  // If it's localhost or 127.0.0.1, use http
  if (/^(localhost|127\.0\.0\.1)(:\d+)?(\/|$)/i.test(url)) {
    return `http://${url}`;
  }

  // Default to https
  return `https://${url}`;
}



// -------------------OTP generation and verification functions-------------------


export function generateOtp(secret: string): string {

  const otp: string = authenticator.generate(secret);
    return otp;
}

export function verifyOtp(secret: string, token: string): boolean {
  return authenticator.verify({
    token,
    secret,
  });
}

// -------------------QR code extraction functions-------------------
type JsQRFn = (
  data: Uint8ClampedArray,
  width: number,
  height: number
) => { data: string } | null;

function getJsQR(): JsQRFn {
  const module = require('jsqr');
  return typeof module === 'function' ? module : (module.default || module);
}

export async function extractSecretFromQr(
  qrLocator: Locator
): Promise<string> {

  await qrLocator.waitFor({ state: 'visible' });

  const buffer = await qrLocator.screenshot({ type: 'png' });
  const png = PNG.sync.read(buffer);
  const codeData = new Uint8ClampedArray(
    png.data.buffer,
    png.data.byteOffset,
    png.data.length
  );
  const decodeQR = getJsQR();
  const code = decodeQR(
    codeData,
    png.width,
    png.height
  );

  if (!code) {
    throw new Error('Unable to decode QR code.');
  }
  const qrData = code.data;
  try {
    const url = new URL(qrData);
    const secret = url.searchParams.get('secret');
    if (!secret) {
      throw new Error('Secret not found inside QR.');
    }
    // console.log("Type Returning from QR:", typeof secret);
    return secret;
    } catch (error) {
    throw new Error(`Failed to parse QR string. Raw output: "${qrData}"`);
  }
}


// -------------------Active user management functions-------------------

export interface ActiveUser {
    name: string;
    email: string;
    password: string;
    mfaSecret?: string;
}

export function getAdmin() {
    const email = process.env.ADMIN_EMAIL;
    const password = process.env.ADMIN_PASSWORD;
    const secret = process.env.ADMIN_SECRET;


     if (!email || !password || !secret) {
    throw new Error(
      "Missing required admin environment variables: ADMIN_EMAIL, ADMIN_PASSWORD, or ADMIN_SECRET"
    );
  }
     return {
      email,
      password,
      secret
     }

}

const FILE = path.join(
    __dirname,
    '..',
    'test-data',
    'active-user.json');

export function saveUser(user: ActiveUser) {
    fs.writeFileSync(FILE, JSON.stringify(user, null, 2));
}

export function getActiveUser() {

    return JSON.parse(
        fs.readFileSync(FILE, 'utf8')
    );

}

export function saveSecret(secret: string) {
    const user = getActiveUser();
    user.secret = secret;
    fs.writeFileSync(
        FILE,
        JSON.stringify(user, null, 2)
    );
}

export function getSecret(): string {
    const user = getActiveUser();
    // console.log("Type inside getsecret:", typeof user.secret);
    return user.secret;
}

export function clearActiveUser() {
    fs.writeFileSync(
        FILE,
        JSON.stringify([], null, 2),
        "utf8"
    );
    console.log("Active user cleared.");
}

// -----------mailinator email generation function-----------------
export function generateMailinatorEmail(name: string): { inboxName: string; email: string } {
  const timestamp = Date.now();
  const cleanName = name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const inboxName = `${cleanName}.${timestamp}`.toLowerCase();
  return {
    inboxName,
    email: `${inboxName}@mailinator.com`,
  };
}

// -------------------Recaptcha loading function-------------------

export async function waitForRecaptcha(page: Page) {
  await page.waitForFunction(() => {
    return (
      typeof (window as any).grecaptcha !== 'undefined' &&
      typeof (window as any).grecaptcha.ready === 'function'
    );
  });

  await page.evaluate(() => {
    return new Promise<void>((resolve) => {
      (window as any).grecaptcha.ready(() => resolve());
    });
  });
}

// --------------Global RBAC Roles------------------

export enum GlobalRole {
  ADMIN = "Admin",

  GLOBAL_PROJECT_MANAGER = "Global Project Manager",

  GLOBAL_USER_MANAGER = "Global User Manager",

  GLOBAL_PROJECT_VIEWER = "Global Project Viewer",

  GLOBAL_PROJECT_SCANNER = "Global Project Scanner",

  GLOBAL_USER_VIEWER = "Global User Viewer",

  PROJECT_USER_MANAGER = "Project User Manager",

  AI_USER = "AI User",

  BASIC_USER = "Basic User",
}