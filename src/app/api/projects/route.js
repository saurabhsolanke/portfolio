import { readDatabase, writeDatabase } from '../db-utils';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const db = readDatabase();
    return NextResponse.json(db.projects || []);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const db = readDatabase();
    
    const newProject = {
      id: db.projects.length > 0 ? Math.max(...db.projects.map(p => p.id)) + 1 : 1,
      ...body,
    };
    
    db.projects.push(newProject);
    writeDatabase(db);
    
    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  }
}

