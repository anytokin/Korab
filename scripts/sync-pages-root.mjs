import { access, cp, copyFile, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');

await copyFile(path.join(dist, 'index.html'), path.join(root, 'index.html'));
await rm(path.join(root, 'assets'), { recursive: true, force: true });
await cp(path.join(dist, 'assets'), path.join(root, 'assets'), { recursive: true });

for (const file of ['.nojekyll']) {
  await mkdir(root, { recursive: true });
  await copyFile(path.join(dist, file), path.join(root, file));
}

try {
  await access(path.join(dist, 'CNAME'));
  await copyFile(path.join(dist, 'CNAME'), path.join(root, 'CNAME'));
} catch {
  await rm(path.join(root, 'CNAME'), { force: true });
}

console.log('Synced dist output to repository root for branch-based GitHub Pages.');
