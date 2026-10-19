import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { Presentation, PresentationFile } from 'file:///C:/Users/User/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/dist/artifact_tool.mjs';
const root='C:/Users/User/Documents/GitHub/Pacegasus_latex_document';
const skill='C:/Users/User/.codex/plugins/cache/openai-primary-runtime/presentations/26.1015.12040/skills/presentations';
const build=path.join(root,'tmp/system-overview'), out=path.join(root,'output/system-overview');
const p=Presentation.create({slideSize:{width:1600,height:900}});
const navy='#201B3E', purple='#7655D9', teal='#007F80', gray='#56546A';
function text(s,t,x,y,w,h,size=28,color=navy,bold=false){const a=s.shapes.add({geometry:'textbox',position:{left:x,top:y,width:w,height:h},fill:'none',line:{fill:'none',width:0}});a.text=t;a.text.style={typeface:'Leelawadee UI',fontSize:size,color,bold};return a;}
function box(s,t,x,y,w,h){const a=s.shapes.add({geometry:'rect',position:{left:x,top:y,width:w,height:h},fill:'#F2EFFA',line:{fill:'#C7BEDD',width:1}});a.text=t;a.text.style={typeface:'Leelawadee UI',fontSize:25,color:navy};return a;}
function link(s,a,b,from='right',to='left'){s.shapes.connect(a,b,{kind:'straight',fromSide:from,toSide:to,line:{fill:'#91889F',width:2}});}
let s=p.slides.add();s.background.fill='#FFFFFF';
text(s,'วิธีดำเนินงานและการออกแบบระบบ',64,38,1450,80,48,navy,true);
text(s,'ขั้นตอนดำเนินงาน',64,140,1450,45,30,teal,true);
const steps=[['01  ศึกษาทฤษฎี','การฝึกวิ่งและเกมมิฟิเคชัน'],['02  เก็บความต้องการ','แบบสอบถามและสัมภาษณ์'],['03  พัฒนาต้นแบบ','UX/UI และระบบต้นแบบ'],['04  ทดสอบระบบ','ตรรกะ API และแอป'],['05  ประเมินผล','การใช้งานและความคิดเห็น']];
steps.forEach(([a,b],i)=>{const x=64+i*300;text(s,a,x,195,290,44,28,navy,true);text(s,b,x,246,280,76,24,gray);if(i<4)text(s,'→',x+267,194,40,45,30,teal);});
text(s,'Use Case: ขอบเขตหลัก',64,340,535,48,32,purple,true);
text(s,'นักวิ่ง',64,410,485,45,28,navy,true);
text(s,'บัญชีและโปรไฟล์\nสุขภาวะและแผนฝึก\nบันทึกการวิ่งและประเมิน RPE\nเพื่อนและคลับ\nรางวัล ร้านค้า และอวตาร์',64,466,535,230,28,navy);
text(s,'หัวหน้าคลับ: จัดการสมาชิกในคลับตนเอง',64,718,535,70,24,gray);
text(s,'ERD ย่อ: ความสัมพันธ์ของข้อมูลหลัก',640,340,900,50,32,purple,true);
const u=box(s,'users\nผู้ใช้งาน',650,430,235,85);
const goals=box(s,'user_goals\nเป้าหมาย',1020,409,260,85);
const prog=box(s,'user_programs\nแผนของผู้ใช้',1020,524,260,85);
const run=box(s,'running_sessions\nการวิ่ง',650,635,270,85);
const rpe=box(s,'rpe_logs\nผลประเมินหลังวิ่ง',1020,659,260,85);
link(s,u,goals);link(s,u,prog);link(s,u,run,'bottom','top');link(s,run,rpe);
text(s,'1 : N',928,422,85,40,23,teal,true);text(s,'1 : N',925,541,85,40,23,teal,true);text(s,'1 : N',662,560,90,40,23,teal,true);text(s,'1 : N',928,674,85,40,23,teal,true);
text(s,'แสดงเฉพาะตารางและ FK หลักจากฐานข้อมูล 41 ตาราง',640,758,890,42,23,gray);
text(s,'Flutter / Dart   →   Express / Node.js   →   PostgreSQL',64,826,1030,43,27,teal,true);
text(s,'ML และ Strava: งานต่อยอด',1120,828,420,42,23,gray);
s.speakerNotes.text='สรุปวิธีดำเนินงาน 5 ขั้นจาก Doc/chapter3.tex และขอบเขต Use Case จาก Doc/usecases.tex โดยการประเมินผู้ใช้ยังเป็นขั้นตอนที่ต้องดำเนินการเพิ่มเติม ไม่อ้างว่าทุก Use Case ผ่านการทดสอบครบแล้ว ERD ย่ออ้างจาก Doc/data_dictionary.tex: user_goals.user_id, user_programs.user_id, running_sessions.user_id อ้าง users.id และ rpe_logs.running_session_id อ้าง running_sessions.id แต่ละรายการลูกอ้างหนึ่งรายการแม่ ความสัมพันธ์ 1:N แสดงความเป็นไปได้หลายรายการ ไม่ยืนยันว่าผู้ใช้หรือเซสชันต้องมีรายการลูกเสมอ ไม่ใส่เส้นแผนไปการวิ่งเพราะไม่ได้ยืนยัน FK โดยตรงจากเอกสาร กลุ่มสังคมและรางวัลละไว้เพื่ออ่านภาพรวม รายละเอียดทั้ง 41 ตารางอยู่ในรายงาน สถาปัตยกรรมอ้างบท 3 ส่วนสถานะ ML/Strava อ้างบท 5';
s=p.slides.add();s.background.fill='#FFFFFF';
text(s,'เส้นทางใช้งานจริงของ Pacegasus',64,38,1450,80,48,navy,true);
const journey=[['ตั้งเป้าหมาย','เลือกเป้าหมายการวิ่ง','pegasus-onboarding-running-goals.png'],['จัดแผน','เลือกแผนและวันฝึก','pegasus-schedule-builder-5k.png'],['วิ่ง','บันทึกเวลาและระยะทาง','pegasus-active-run-session.png'],['ประเมิน RPE','บันทึกความหนักหลังวิ่ง','pegasus-post-run-feedback.png'],['รับรางวัล','ดู Coin และ EXP','pegasus-run-rewards.png']];
for(let i=0;i<journey.length;i++){const [title,sub,img]=journey[i];const x=64+i*300;text(s,`${i+1}  ${title}`,x,157,280,52,32,i===4?'#9C6500':purple,true);if(i<4)text(s,'→',x+263,158,40,45,32,teal);s.images.add({blob:new Uint8Array(await fs.readFile(path.join(root,'Doc/images',img))),contentType:'image/png',alt:title,fit:'contain',position:{left:x,top:234,width:262,height:524}});text(s,sub,x,778,285,70,24,navy);}
text(s,'ภาพหน้าจอต้นแบบคนละช่วงใช้งาน ตัวเลขเป็นข้อมูลตัวอย่าง',64,852,1470,35,22,gray);
s.speakerNotes.text='เส้นทาง: ตั้งเป้าหมาย → จัดแผน → วิ่ง → ประเมิน RPE → รับรางวัล ใช้ภาพต้นฉบับใน Doc/images ครบห้าภาพโดยไม่แก้ข้อความหรือตัวเลข ภาพเป็นตัวอย่างจากคนละช่วงการใช้งาน ไม่ได้อ้างว่าเป็นเซสชันต่อเนื่องเดียวกัน ภาพเป้าหมายยังไม่ได้เลือกค่า ภาพตารางยังอยู่ระหว่างจัดแผน และการวิ่งสั้นเป็นตัวอย่างหน้าจอ RPE คือคะแนนความหนักที่ผู้ใช้รู้สึกหลังวิ่ง ระบบเก็บร่วมกับระยะเวลาเพื่อคำนวณ sRPE ก่อนเริ่มวิ่งจริงมี Daily Wellness Check-in ซึ่งละรายละเอียดในภาพห้าขั้นนี้เพื่อแสดงเส้นทางหลัก จำนวน Coin และ EXP ที่ปรากฏเป็นตัวอย่าง ไม่ใช่อัตรารางวัลตายตัว แหล่งอ้างอิง: Doc/chapter4.tex และ Doc/frontend_test_results.tex';
for(let i=0;i<p.slides.items.length;i++){const blob=await p.export({slide:p.slides.items[i],format:'png',scale:1});await fs.writeFile(path.join(out,`page-${i+1}.png`),new Uint8Array(await blob.arrayBuffer()));}
const candidate=path.join(build,'candidate.pptx');await(await PresentationFile.exportPptx(p)).save(candidate);
const {finalizePresentation}=await import(pathToFileURL(path.join(skill,'container_tools/artifact_tool_utils.mjs')).href);
const originalLink=fs.link;
fs.link=async(a,b)=>{try{return await originalLink(a,b);}catch(e){if(e.code!=='EPERM')throw e;return fs.copyFile(a,b,1);}};
const result=await finalizePresentation({workspaceDir:root,candidatePath:candidate,finalPath:path.join(out,'pacegasus-overview.pptx'),pythonExecutable:'C:/Users/User/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/python.exe',integrityValidatorPath:path.join(skill,'container_tools/inspect_presentation_package_integrity.py'),layoutValidatorPath:path.join(skill,'container_tools/inspect_presentation_layout_geometry.py'),layoutArgs:['--expected-slide-size-emu','15240000,8572500','--validate-heading-fit'],explicitTotalSlideCount:2,fontPolicy:{basis:'design',families:['Leelawadee UI']},verifyArtifactToolImport:true,receiptPath:path.join(build,'validation.json')});
console.log(JSON.stringify(result));

