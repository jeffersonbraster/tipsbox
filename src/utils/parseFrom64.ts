export const fromBase64 = (value: any) => {
  const buff = Buffer.from(value, "base64");
  return buff.toString("ascii");
};
