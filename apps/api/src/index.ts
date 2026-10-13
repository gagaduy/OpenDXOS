// SPDX-FileCopyrightText: 2026 OpenDX contributors
// SPDX-License-Identifier: Apache-2.0

import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Health & System Info endpoints
app.get("/health", (_req: Request, res: Response) => {
  res.json({
    status: "healthy",
    service: "@opendx/api",
    version: "0.1.0",
    timestamp: new Date().toISOString(),
  });
});

app.get("/api/v1/info", (_req: Request, res: Response) => {
  res.json({
    name: "OpenDX Core API",
    competition: "Olympic Tin hoc Sinh vien Viet Nam 2026 (OLP - VFOSSA)",
    architecture: "Modular Monolith (Clean Architecture)",
    license: "Apache-2.0",
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`[OpenDX API] Server listening on port ${PORT}`);
  });
}

export default app;
