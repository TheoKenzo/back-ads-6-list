export function getEnvVariable(key: string | undefined, name: string): string {
  if (!key) {
    throw new Error(`Environment variable ${name} is not defined`);
  }

  return key;
}
