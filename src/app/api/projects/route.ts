import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

interface Project {
  id: string;
  name: string;
  type: string;
  intro: string;
  info: string[];
  funFact: string | null;
  techStack: string[];
  design: string | null;
  github: string;
  deploy: string | null;
  startDate: string;
  finishDate: string | null;
}

export async function GET() {
  // Path to the project's JSON files
  const projectsJsonPath = path.join(process.cwd(), "public", "projects", "json");

  try {
    // Get the list of project files from the folder
    const files = await fs.promises.readdir(projectsJsonPath);
    const projectsData: Project[] = [];

    for (const file of files) {
      const filePath = path.join(projectsJsonPath, file); // Complete file path
      const fileContent = await fs.promises.readFile(filePath, "utf-8"); // Read file content
      const parsedContent = JSON.parse(fileContent); // Parse JSON content

      projectsData.push(parsedContent); // Push into the array
    }

    // Sort projects by the most recent startDate
    projectsData.sort((a, b) => a.startDate > b.startDate ? -1 : 1);

    return NextResponse.json({ projectsData }); // Return sorted projects
  } catch (err) {
    console.error("Error reading project files:", err);
    return NextResponse.json({ error: "Failed to load project data." });
  }
}
