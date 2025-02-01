import fs from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

// Checks if a file exists at the given path
async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath)
    return true;
  }
  catch {
    return false;
  }
}

// Gets the valid preview image path based on the theme
async function getValidPreviewPath(basePath: string, theme: string): Promise<string | null> {
  const lightThemePath = path.join(basePath, "banner.png");
  const darkThemePath = path.join(basePath, "banner-dark.png");

  if (theme === "light" && await fileExists(lightThemePath)) {
    return lightThemePath;
  }

  if (theme === "dark") {
    if (await fileExists(darkThemePath)) {
      return darkThemePath
    }
    else if (await fileExists(lightThemePath)) {
      return lightThemePath
    }
  }

  return null;
}

//API Route to serve project preview images.
export async function GET(res: Request) {
  const { searchParams } = new URL(res.url);
  const theme = searchParams.get("theme");
  const projectId = searchParams.get("projectId");

  if (!projectId) {
    return NextResponse.json({ error: "Invalid projectId!" }, { status: 400 });
  }

  const basePath = path.join(process.cwd(), "public", "projects", "preview", projectId);

  if (theme) {
    let previewPath = await getValidPreviewPath(basePath, theme);

    if (!previewPath) {
      return NextResponse.json({ error: "Preview image not found!" }, { status: 404 });
    }

    previewPath = await previewPath.replace(process.cwd() + path.sep + "public", "");

    return NextResponse.json(previewPath)
  }
}