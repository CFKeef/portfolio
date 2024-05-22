import {
    S3Client,
    ListObjectsV2Command
  } from "@aws-sdk/client-s3";
  
const bucketName = "portfolio";

const storage = new S3Client({
    region: "auto",
    endpoint: `https://${process.env.CF_ACCOUNT_ID as string}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: process.env.CF_ACCESS_ID as string,
      secretAccessKey:  process.env.CF_ACCESS_SECRET as string,
    },
  });
  
export const getBucketItems = async () => await storage.send(new ListObjectsV2Command({Bucket: bucketName}))