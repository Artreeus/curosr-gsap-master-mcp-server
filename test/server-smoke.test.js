import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { test } from 'node:test';

test('compiled server starts over stdio', async () => {
  const child = spawn(process.execPath, ['dist/index.js'], {
    stdio: ['pipe', 'ignore', 'pipe'],
  });

  let stderr = '';

  try {
    await new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error(`Server startup timed out. stderr:\n${stderr}`));
      }, 5_000);

      child.stderr.setEncoding('utf8');
      child.stderr.on('data', (chunk) => {
        stderr += chunk;
        if (stderr.includes('started successfully')) {
          clearTimeout(timeout);
          resolve();
        }
      });

      child.once('error', (error) => {
        clearTimeout(timeout);
        reject(error);
      });

      child.once('exit', (code) => {
        if (!stderr.includes('started successfully')) {
          clearTimeout(timeout);
          reject(new Error(`Server exited before startup with code ${code}.`));
        }
      });
    });

    assert.match(stderr, /Transport initialized: stdio/);
  } finally {
    child.kill('SIGTERM');
  }
});
