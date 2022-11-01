import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
@Component({
  selector: 'app-editor',
  templateUrl: './editor4.component.html',
  styleUrls: ['./editor4.component.scss']
})
export class Editor4Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.createPdf();
  }
  goToPage(page: String) {
    this.router.navigateByUrl('/' + page);
  }
  async function createPdf() {
    const pdfDoc = await PDFDocument.create()
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
  
    const page = pdfDoc.addPage()
    const { width, height } = page.getSize()
    const fontSize = 30
    page.drawText('Creating PDFs in JavaScript is awesome!', {
      x: 50,
      y: height - 4 * fontSize,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0.53, 0.71),
    })
}
