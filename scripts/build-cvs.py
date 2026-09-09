"""Five CVs tailored to the reviewed repository evidence; no inferred dates."""
from pathlib import Path
from xml.sax.saxutils import escape
import json

from reportlab.lib import colors
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, KeepTogether

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'cv'
OUT.mkdir(parents=True, exist_ok=True)
FONT = Path('/usr/share/fonts/truetype/dejavu')
for name, filename in [('CV', 'DejaVuSans.ttf'), ('CV-Bold', 'DejaVuSans-Bold.ttf')]:
    pdfmetrics.registerFont(TTFont(name, str(FONT / filename)))
pdfmetrics.registerFontFamily('CV', normal='CV', bold='CV-Bold')

INK = colors.HexColor('#202C28')
GREEN = colors.HexColor('#315D49')
MUTED = colors.HexColor('#53635B')
LINE = colors.HexColor('#D2DDD6')
PAGE_W, PAGE_H = A4
MARGIN = 49
WIDTH = PAGE_W - 2 * MARGIN - 12
STYLES = {
    'name': ParagraphStyle('name', fontName='CV-Bold', fontSize=27, leading=33, textColor=INK),
    'role': ParagraphStyle('role', fontName='CV', fontSize=11.2, leading=17, textColor=GREEN),
    'contact': ParagraphStyle('contact', fontName='CV', fontSize=9.3, leading=14, textColor=MUTED),
    'summary': ParagraphStyle('summary', fontName='CV', fontSize=10.3, leading=14.7, textColor=INK),
    'section': ParagraphStyle('section', fontName='CV-Bold', fontSize=9, leading=12, textColor=GREEN, spaceBefore=10, spaceAfter=5, keepWithNext=True),
    'title': ParagraphStyle('title', fontName='CV-Bold', fontSize=10.5, leading=15, textColor=INK, spaceAfter=4, keepWithNext=True),
    'date': ParagraphStyle('date', fontName='CV', fontSize=9.3, leading=15, textColor=MUTED, alignment=TA_RIGHT),
    'bullet': ParagraphStyle('bullet', fontName='CV', fontSize=10.15, leading=14.4, textColor=INK, leftIndent=10, firstLineIndent=0, bulletIndent=0, bulletFontName='CV', bulletFontSize=8, spaceAfter=4),
    'skill': ParagraphStyle('skill', fontName='CV', fontSize=9.7, leading=14.3, textColor=INK, spaceAfter=2),
    'body': ParagraphStyle('body', fontName='CV', fontSize=10.15, leading=14.4, textColor=INK, spaceAfter=3),
}

URL = {
    'equipment': 'https://swazitrac.com/',
    'products': 'https://www.swazigreen.com/',
    'gpu': 'https://github.com/xSolumx/AI_Culture_Mind/tree/main/SSM-Models/pure_spin_ssm_v1_2',
    'research': 'https://github.com/xSolumx/AI_Culture_Mind',
    'cnn': 'https://github.com/xSolumx/MLG-10-Animals/blob/main/MLG-10-Animals.ipynb',
    'csharp': 'https://github.com/xSolumx/Prg-2782-Project-1/blob/master/DataHandler.cs',
    'wpf': 'https://github.com/xSolumx/DISM_Graphical_App/blob/master/MainWindow.xaml.cs',
    'blocks': 'https://github.com/xSolumx/AdditionalBlocks',
    'items': 'https://github.com/xSolumx/Rebel-Items',
}

EXPERIENCE = [
    {'title': 'Freelance Developer', 'dates': '2023 - 2025', 'bullets': [
        'Developed web applications for commerce and professional services, covering product catalogues, authentication, content management and deployment.'
    ]},
    {'title': 'Game Server Developer & Administrator', 'dates': '2019 - 2022', 'bullets': [
        'Built event-driven Java plugins with persistent item metadata and server API integrations; maintained Linux servers and investigated performance issues.'
    ]},
]

def project(title, links, bullets):
    return {'title': title, 'links': [(label, URL[key]) for label, key in links], 'bullets': bullets}

VARIANTS = json.loads((ROOT / 'data/cv-variants.json').read_text())

def p(text, style='body'):
    return Paragraph(text, STYLES[style])

def link(label, url):
    return f'<link href="{escape(url)}" color="#315D49"><u>{escape(label)}</u></link>'

def bullet_items(items):
    return [Paragraph(escape(text), STYLES['bullet'], bulletText='\u2022') for text in items]

def section_header(label):
    rule = HRFlowable(width='100%', thickness=.5, color=LINE, spaceAfter=5)
    rule.keepWithNext = True
    return [p(escape(label.upper()), 'section'), rule]

def project_block(item):
    links = ' &nbsp; / &nbsp; '.join(link(label, url) for label, url in item['links'])
    return KeepTogether([
        p(escape(item['title']) + ' <font name="CV" color="#53635B">|</font> ' +
          f'<font name="CV" size="9.3">{links}</font>', 'title'),
        *bullet_items(item['bullets']),
        Spacer(1, 2),
    ])

def job_block(item):
    header = Table([[p(escape(item['title']), 'title'), p(item['dates'], 'date')]], colWidths=[WIDTH - 98, 98])
    header.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 0),
        ('TOPPADDING', (0, 0), (-1, -1), 0),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
    ]))
    return KeepTogether([header, *bullet_items(item['bullets']), Spacer(1, 3)])

def page_frame(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(GREEN)
    canvas.rect(MARGIN + 6, PAGE_H - 27, 33, 2.5, fill=1, stroke=0)
    canvas.restoreState()

def build(variant):
    path = OUT / f"Hayden_Austin_CV_{variant['key']}.pdf"
    story = [
        p('Hayden Austin', 'name'),
        p(escape(variant['role']), 'role'),
        Spacer(1, 5),
        p(link('haydaust@gmail.com', 'mailto:haydaust@gmail.com') + ' &nbsp; | &nbsp; ' +
          link('GitHub', 'https://github.com/xSolumx') + ' &nbsp; | &nbsp; ' + link('Portfolio', 'https://xsolumx.github.io/CV_Website/'), 'contact'),
        Spacer(1, 13),
        p(escape(variant['summary']), 'summary'),
        *section_header(variant['section']),
        *[project_block(item) for item in variant['projects']],
        *section_header('Experience'),
        *[job_block(item) for item in EXPERIENCE],
        *section_header('Technical skills'),
        *[p(f'<b>{escape(label)}:</b> {escape(text)}', 'skill') for label, text in variant['skills']],
        KeepTogether([
            *section_header('Education'),
            p('<b>Belgium Campus ITversity</b>'),
            p('Studies toward a Bachelor of Computing, specialising in Software Engineering.'),
        ]),
    ]
    doc = SimpleDocTemplate(str(path), pagesize=A4, leftMargin=MARGIN, rightMargin=MARGIN,
        topMargin=39, bottomMargin=38, title=f"Hayden Austin | {variant['role']}",
        author='Hayden Austin', subject='Experience, selected projects, technical skills and education',
        pageCompression=1)
    doc.build(story, onFirstPage=page_frame, onLaterPages=page_frame)
    return path

if __name__ == '__main__':
    paths = [build(variant) for variant in VARIANTS]
    print(json.dumps([str(path) for path in paths], indent=2))
