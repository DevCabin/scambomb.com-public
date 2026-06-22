import { NextResponse } from 'next/server'
import { readFileSync } from 'fs'
import { join } from 'path'

export async function GET() {
  try {
    const filePath = join(process.cwd(), 'public', 'Ai-Voice-Clone-Survival-Guide-FINAL.pdf')
    const file = readFileSync(filePath)
    
    return new NextResponse(file, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="AI-Voice-Clone-Survival-Guide.pdf"',
      },
    })
  } catch (error) {
    return new NextResponse('PDF not found', { status: 404 })
  }
}