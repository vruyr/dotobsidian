/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var R=Object.defineProperty;var K=Object.getOwnPropertyDescriptor;var q=Object.getOwnPropertyNames;var Z=Object.prototype.hasOwnProperty;var Q=(r,s)=>{for(var e in s)R(r,e,{get:s[e],enumerable:!0})},ee=(r,s,e,t)=>{if(s&&typeof s=="object"||typeof s=="function")for(let i of q(s))!Z.call(r,i)&&i!==e&&R(r,i,{get:()=>s[i],enumerable:!(t=K(s,i))||t.enumerable});return r};var te=r=>ee(R({},"__esModule",{value:!0}),r);var me={};Q(me,{default:()=>ge});module.exports=te(me);var J=require("@codemirror/view"),v=require("obsidian");var F=require("obsidian");function E(r,s){return new Promise(e=>{let t=new I(r,s);t.onClose=()=>{e(t.chosenMark)},t.open()})}var I=class extends F.Modal{constructor(s,e){super(s),this.taskCollector=e,this.containerEl.id="taskcollector-modal"}onOpen(){let s=this.contentEl.createDiv("taskcollector-selector markdown-preview-view"),e=s.createEl("ul");e.addClass("contains-task-list"),this.addTaskValues(e,this.taskCollector.cache.completedMarks,!0);let t=s.createEl("ul");t.addClass("contains-task-list"),this.addTaskValues(t,this.taskCollector.cache.incompleteMarks,!1);let i=s.createEl("nav"),n=i.createSpan();n.innerHTML="<b>esc</b> to dismiss";let a=i.createSpan();a.innerHTML="<b>bksp</b> to remove <code>[]</code>";let o=c=>{switch(c.key){case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"ArrowDown":case"CapsLock":case"Tab":break;default:this.chosenMark=c.key,c.preventDefault(),c.stopImmediatePropagation(),this.close()}};this.scope.register([],null,o),this.scope.register(["Shift"],null,o)}addTaskValues(s,e,t){for(let i of e){let n=s.createEl("li",{cls:`task-list-item ${i===" "?"":" is-checked"}`,attr:{"data-task":i}});n.addEventListener("click",o=>{this.chosenMark=i,this.close()});let a=n.createEl("input",{cls:"task-list-item-checkbox",attr:{id:`task-list-item-checkbox-${i}`,type:"checkbox",style:"pointer-events: none;"}});i!==" "&&a.setAttribute("checked",""),n.createEl("span",{text:i===" "?"\u2423":i,attr:{style:"pointer-events: none;"}})}}onClose(){this.contentEl.empty()}};var x=class{constructor(s,e){this.app=s,this.taskCollector=e}getCompletedTaskValues(){return this.taskCollector.cache.completedMarks}getIncompleteTaskValues(){return this.taskCollector.cache.incompleteMarks}getMark(){return E(this.app,this.taskCollector)}isComplete(s){return this.getCompletedTaskValues().contains(s)}isCanceled(s){return s==="-"}};var f="\xD8",d="text",u="default",T="complete",P={groups:{default:{name:u,marks:" ",complete:!1,removeExpr:"",appendDateFormat:"",registerCommand:!1,useContextMenu:!1},complete:{name:T,marks:"xX",complete:!0,removeExpr:"",appendDateFormat:"",registerCommand:!1,useContextMenu:!1}},markCycle:"",markCycleRemoveTask:!1,collectionEnabled:!1,previewClickModal:!0,contextMenu:{markTask:!0,resetTask:!1,resetAllTasks:!1,collectTasks:!0},debug:!1,convertEmptyLines:!1,hideNotifications:!1,skipSectionMatch:"",version:{major:0,minor:0,patch:0}},H={name:u,marks:"",complete:!1,removeExpr:"",appendDateFormat:"",registerCommand:!1,useContextMenu:!1};var O={areaHeading:"## Log",removeCheckbox:!1},V={useContextMenu:!1,completedMarks:"",incompleteMarks:"",skipSectionExpr:null,marks:{},removeExpr:{},undoExpr:{},areaHeadings:[],headingToMark:{}},_={completedAreaHeader:"## Log",removeExpression:"",appendDateFormat:"",appendRemoveAllTasks:!1,incompleteTaskValues:" ",onlyLowercaseX:!1,supportCanceledTasks:!0,previewOnClick:!1,rightClickComplete:!1,rightClickMark:!1,rightClickMove:!1,rightClickResetTask:!1,rightClickResetAll:!1,rightClickToggleAll:!1,completedAreaRemoveCheckbox:!1};var C={constructSettings:se,createSettingsGroup:N,sanitize:Y,sanitizeMarks:M,moveGroup:y};function M(r){let s=Array.from(new Set(r));return s.sort(),s.join("").replace(f,"")}function Y(r,s){r.tc.logDebug("sanitize begin",s);let e=!1;s.markCycle&&(s.markCycle=[...new Set(s.markCycle)].join(""),s.markCycle.replace("\xA7",""),s.markCycleRemoveTask&&(s.markCycle+="\xA7"));for(let[i,n]of Object.entries(s.groups))i!==n.name&&(e=!0,s.groups[n.name]?(console.warn(`(TC) Group named ${n.name} already exists. Reverting group name to ${i}`),n.name=i):y(s.groups,i,n.name));$(s.groups[d])&&(e=!0,s.groups[d].marks=f);let t=Object.entries(s.groups).filter(([i,n])=>!$(n));if(t.length>1){e=!0,console.warn(`(TC) There can be only one group for text-only settings (${d}).`),s.groups[d]||(console.info(`(TC) Configuration: renamed group ${t[0][1].name} to ${d}.`),y(s.groups,t[0][1].name,d));let i="",n;for(let[a,o]of Object.entries(s.groups))!$(o)&&a!==d&&([i,n]=oe(i),s.groups[a].marks=n)}else t.length===1&&t[0][1].name!==d&&(console.info(`(TC) Configuration: renamed group ${t[0][1].name} to ${d}.`),y(s.groups,t[0][1].name,d));s.groups[d]&&s.groups[d].collection&&(s.groups[d].collection=void 0),e&&r.tc.notify("(TC) Configuration settings were modified. See console for details."),r.tc.logDebug("sanitize end",s)}async function se(r,s){return s.version?await ie(r,s):await ne(r,s)}async function ie(r,s){let e={...P,...s};Y(r,e);let t=j(r.manifest.version);return ae(t,e.version)===0||(e.version=t,await r.saveData(e)),e}async function ne(r,s){let e={..._,...s},t=JSON.parse(JSON.stringify(P));t.previewClickModal=e.previewOnClick,t.contextMenu.markTask=e.rightClickMark,t.contextMenu.resetTask=e.rightClickResetTask,t.groups[T].useContextMenu=e.rightClickComplete;let i="x";return e.onlyLowercaseX||(i+="X"),e.supportCanceledTasks&&(i+="-"),t.groups[T].marks=M(i),t.groups[T].appendDateFormat=e.appendDateFormat,t.groups[T].removeExpr=e.removeExpression,i=e.incompleteTaskValues,t.groups[u].marks=M(i),e.appendRemoveAllTasks&&(t.groups[u].appendDateFormat=e.appendDateFormat,t.groups[u].removeExpr=e.removeExpression),t.collectionEnabled=!0,t.contextMenu.collectTasks=e.rightClickMove||!1,s.cycleTaskValues&&(t.markCycle=s.cycleTaskValues,s.incompleteTaskValuesRow2&&N(t.groups,"group-2",{marks:M(s.incompleteTaskValuesRow2),appendDateFormat:s.appendTextFormatMarkRow2}),s.appendTextFormatMark&&(t.groups[u].appendDateFormat=s.appendTextFormatMark),s.appendTextFormatAppend&&N(t.groups,d,{marks:f,appendDateFormat:s.appendTextFormatAppend,useContextMenu:s.rightClickAppend}),r.tc.logDebug("groups",t.groups),t.collectionEnabled=!1),t.collectionEnabled&&(t.groups[T].collection={areaHeading:e.completedAreaHeader,removeCheckbox:e.completedAreaRemoveCheckbox}),t.version=j(r.manifest.version),r.tc.logDebug("migrated settings",t),await r.saveData(t),t}function N(r,s,e){r[s]={...H,name:s,...e},r[s].marks===""&&(r[s].marks=f)}function j(r){let s=r.split(".");return{major:Number(s[0]),minor:Number(s[1]),patch:Number(s[2])}}function ae(r,s){return r.major===s.major?r.minor===s.minor?r.patch-s.patch:r.minor-s.minor:r.major-s.major}function $(r){return r&&r.marks!==""&&r.marks!==f}function y(r,s,e){!r||!s||!e||e===s||(r[e]?console.warn(`(TC) Can not move group, ${e} already exists`):(r[s].name=e,r[e]=r[s],delete r[s]))}function oe(r){let s=r,e=0;do{let t=String.fromCharCode(9812+Math.random()*20);if(s.indexOf(t)<0)return s+=t,[s,t];e++}while(e<10);return[s,"\u24E7"]}var h=require("obsidian");var U=require("obsidian");var re=/^(Y|D|M|H|h|m)+$/,ce=/(\[[^[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;var A=class{constructor(){this.anyListItem=new RegExp(/^([\s>]*(?:-|\*|\d+\.) )([^\\[].*)$/);this.anyTaskMark=new RegExp(/^([\s>]*(?:-|\*|\d+\.) \[)(.)(\] .*)$/);this.anyText=new RegExp(/^([\s>]*)(.*)$/);this.blockQuote=new RegExp(/^(\s*>[\s>]*)(.*)$/);this.blockRef=new RegExp(/^(.*?)( \^[A-Za-z0-9-]+)?$/);this.continuation=new RegExp(/^( {2,}|\t)/);this.stripTask=new RegExp(/^([\s>]*(?:-|\d+\.)) \[.\] (.*)$/)}init(s){this.settings=s,this.cache=JSON.parse(JSON.stringify(V)),this.cache.useContextMenu=s.contextMenu.markTask||s.contextMenu.resetTask||s.contextMenu.collectTasks||s.contextMenu.resetAllTasks;for(let e of Object.values(s.groups))this.cacheTaskSettings(e,this.cache);this.settings.collectionEnabled&&(this.cache.areaHeadings=[...Object.keys(this.cache.headingToMark)],this.cache.areaHeadings.sort()),this.cache.completedMarks=C.sanitizeMarks(this.cache.completedMarks),this.cache.incompleteMarks=C.sanitizeMarks(this.cache.incompleteMarks),this.cache.skipSectionExpr=X(s.skipSectionMatch),this.logDebug("configuration read",this.settings,this.cache)}handlerChanged(s){return this.settings.previewClickModal!==s.previewClickModal}isDirty(s){return JSON.stringify(this.settings)!==JSON.stringify(s)}logDebug(s,...e){(!this.settings||this.settings.debug)&&console.debug(`(TC) ${s}`,...e)}notify(s){this.settings?.hideNotifications?console.log(s):new U.Notice(s)}cacheTaskSettings(s,e){for(let t of s.marks.split(""))if(e.marks[t]){let i=e.marks[t].name;console.warn(`Two groups of settings contain ${t}: ${i} and ${s.name}. Using ${i}`)}else{if(e.marks[t]=s,e.useContextMenu=e.useContextMenu||s.useContextMenu,s.removeExpr){let i=W(s.removeExpr);e.removeExpr[s.name]=i}if(s.appendDateFormat){let i=z(s.appendDateFormat);e.undoExpr[s.name]=i}s.collection?.areaHeading&&(e.headingToMark[s.collection.areaHeading]?e.headingToMark[s.collection.areaHeading]+=t:e.headingToMark[s.collection.areaHeading]=t),t!==f&&(s.complete?e.completedMarks+=t:e.incompleteMarks+=t)}}markInCycle(s,e,t=[]){let i=s.split(`
`),n=this.settings.markCycle.length;for(let a of t){let o=this.anyTaskMark.exec(i[a]),c=this.anyListItem.exec(i[a]);if(o){let l=o[2],g=this.settings.markCycle.indexOf(l),k=g<0?e==="NEXT"?0:n-1:e==="NEXT"?(g+1)%n:(g+n-1)%n,m=this.settings.markCycle[k];m==="\xA7"?i[a]=this.doRemoveTask(i[a]):i[a]=this.doMarkTask(i[a],l,m)}else if(c?.[2]){let l=this.settings.markCycle.replace("\xA7",""),g=l[e==="NEXT"?0:l.length-1];i[a]=this.updateLineText(`${c[1]}[ ] ${c[2]}`,g)}}return i.join(`
`)}markSelectedTask(s,e,t=[]){let i=s.split(`
`);for(let n of t)i[n]=this.updateLineText(i[n],e);return i.join(`
`)}updateLineText(s,e){let t=e;if(t==="Backspace")return this.doRemoveTask(s);if(t===""&&(t=f),t===f&&this.cache.marks[f])return this.doAppendText(s);let i=this.anyTaskMark.exec(s);if(i){let a=i[2];return this.doMarkTask(s,a,t)}let n=this.anyListItem.exec(s);if(n?.[2])return this.updateLineText(`${n[1]}[ ] ${n[2]}`,t);if(s&&this.settings.convertEmptyLines){let a=this.anyText.exec(s);return this.updateLineText(`${a[1]}- [ ] ${a[2]}`,t)}return this.logDebug("not a task or list item %s",`|${s}|`),s}doAppendText(s,e=!0){let t=s,i="",n=t.endsWith("  "),a=this.blockRef.exec(t);a?.[2]&&(t=a[1],i=a[2]);let o=this.cache.undoExpr[d];if(o&&(t=t.replace(o,"")),e){let c=this.cache.removeExpr[d];c&&(t=t.replace(c,""));let l=this.settings.groups[d].appendDateFormat;l&&(t.endsWith(" ")||(t+=" "),t+=window.moment().format(l))}return t=t.replace(/\s*$/,i),n&&(t+="  "),this.logDebug("text updated",`|${t}|`),t}doMarkTask(s,e,t){let i=s;if(e===t)return this.logDebug("task already marked",`|${i}|`),i;this.logDebug("mark task",`|${i}|`);let n=this.cache.marks[e]?.name||u,a=this.cache.marks[t]?.name||u;i=i.replace(this.anyTaskMark,`$1${t}$3`);let o="",c=i.endsWith("  "),l=this.blockRef.exec(i);l?.[2]&&(i=l[1],o=l[2]);let g=this.cache.undoExpr[n];g&&(i=i.replace(g,""));let k=this.cache.removeExpr[a];k&&(i=i.replace(k,""));let m=this.settings.groups[a].appendDateFormat;return m&&(i.endsWith(" ")||(i+=" "),i+=window.moment().format(m)),i=i.replace(/\s*$/,o),c&&(i+="  "),this.logDebug("task marked",`|${i}|`),i}doRemoveTask(s){return s.replace(this.stripTask,"$1 $2")}resetAllTasks(s){let e=s.split(`
`),t=[],i=!1,n=!1;for(let a of e){let o=a.trim();i||n?((a.startsWith("#")||o==="---")&&(n=this.isSkippedSection(a),i=S(this.cache.areaHeadings,o)!==void 0),t.push(a)):o.startsWith("#")||o==="---"?(i=S(this.cache.areaHeadings,o)!==void 0,n=this.isSkippedSection(a),t.push(a)):i||n||t.push(a.replace(this.anyTaskMark,"$1 $3"))}return t.join(`
`)}moveAllTasks(s){if(this.cache.areaHeadings.length===0)return s;let e=[],t=[],i=this.scan(s,e,t),n=this.move(e,i,t,0);for(let a=0;a<t.length;a++){let[o,c]=t[a].split("%:%"),l=Number(c);i[o].blocks[l].existing=this.move(i[o].blocks[l].existing,i,t,a,this.cache.headingToMark[o])}return n.flatMap(a=>{let o=a.match(/%%--TC--(.*)--(\d+)--%%/);if(o){let c=o[1],l=Number(o[2]);return i[c].blocks[l].newTasks.concat(...i[c].blocks[l].existing)}return a}).join(`
`)}scan(s,e,t){let i=s.split(`
`);this.ensureHeadings(i);let n={},a=null;for(let o of i){let c=o.trim();if(o.startsWith("#")&&S(this.cache.areaHeadings,c)){e.push(o);let l=this.createCompletionArea(c,n);a=n[c].blocks[l].existing,e.push(`%%--TC--${c}--${l}--%%`),t.push(`${c}%:%${l}`)}else a&&(o.startsWith("#")||o.trim()==="---")?(a=null,e.push(o)):a?a.push(o):e.push(o)}return n}move(s,e,t,i,n){let a=i,o=[],c=null,l=null,g=!1,k=!1,m=-1;for(let p of s){if(m++,(p.startsWith("#")||p.trim()==="---")&&(k=this.isSkippedSection(p),this.logDebug("TC: section",p,k)),l&&!this.isTaskLine(p)&&this.isContinuation(p,g,s,m)){l.push(p);continue}if(l&&(this.moveMark(c,l,e,t,a),c=null,l=null,g=!1),p.startsWith("%%--TC--")){a=le(p),o.push(p);continue}let w=this.anyTaskMark.exec(p);if(k)o.push(p);else if(w){let b=w[2];n&&n.indexOf(b)>=0?o.push(p):this.isCollected(b)?(this.removeCheckbox(b)&&(p=this.doRemoveTask(p)),c=b,l=[],l.push(p),g=this.isCallout(p)):o.push(p)}else o.push(p)}return l&&c&&this.moveMark(c,l,e,t,a),o}moveMark(s,e,t,i,n){let a=this.cache.marks[s].collection.areaHeading,o=this.findNextSection(a,i,n);for(let c of e)t[a].blocks[o].newTasks.push(c)}findNextSection(s,e,t){let i=!1;for(let n=t;!i||n!==t;n++)if(n===e.length&&(n=0,i=!0),e[n].startsWith(s)){let[a,o]=e[n].split("%:%");return Number(o)}}createCompletionArea(s,e){return e[s]||(e[s]={blocks:[]}),e[s].blocks.push({existing:[],newTasks:[]}),e[s].blocks.length-1}ensureHeadings(s){for(let e of this.cache.areaHeadings)S(s,e)||(s[s.length-1].trim()!==""&&s.push(""),s.push(e),s.push(""))}isCollected(s){return this.cache.marks[s]?.collection?.areaHeading}removeCheckbox(s){return this.cache.marks[s]?.collection?.removeCheckbox}isSkippedSection(s){return this.cache.skipSectionExpr?.test(s)}isCallout(s){return this.blockQuote.test(s)}isTaskLine(s){return this.anyTaskMark.test(s)}isContinuation(s,e,t,i){if(e){let n=this.blockQuote.exec(s);if(n)return n[1].endsWith(">")||n[1].endsWith("  ")||n[1].endsWith("	")}if(s.length===0){let n=i+1;for(;n<t.length;){if(t[n].length>0)return this.continuation.test(t[n]);n++}}return this.continuation.test(s)}};function S(r,s){return r.find(e=>e===s)}function le(r){let s=r.match(/%%--TC--(.*)--(\d+)--%%/);if(s)return Number(s[2])}var B={tryCompleteRegex:he,tryIncompleteRegex:de,tryUndoRegex:z,tryRemoveTextRegex:W,trySkipSectionRegex:X};function X(r){return r?new RegExp(r):null}function he(r){return new RegExp(`^([\\s>]*- \\[)[${r}](\\] .*)$`)}function de(r){return new RegExp(`^([\\s>]*- \\[)[${r}](\\] .*)$`)}function W(r){return r?new RegExp(r):null}function z(r){let s=r.match(ce);for(let t=0,i=s.length;t<i;t++){let n=s[t];re.test(n)?s[t]=n.replace(/YYYY/g,"\\d{4}").replace(/YY/g,"\\d{2}").replace(/DD/g,"\\d{2}").replace(/D/g,"\\d{1,2}").replace(/MMM/g,"[A-Za-z]{3}").replace(/MM/g,"\\d{2}").replace(/M/g,"\\d{1,2}").replace(/HH/g,"\\d{2}").replace(/H/g,"\\d{1,2}").replace(/hh/g,"\\d{2}").replace(/h/g,"\\d{1,2}").replace(/mm/g,"\\d{2}").replace(/m/g,"\\d{1,2}"):n.match(/\[[\s\S]/)?s[t]=G(n.replace(/^\[|\]$/g,"")):s[t]=G(n)}let e=`\\s*${s.join("")}\\s*`;return new RegExp(`${e}( \\^[A-Za-z0-9-]+)?$`)}function G(r){return r.replace(/\(/g,"\\(").replace(/\)/g,"\\)").replace(/\[/g,"\\[").replace(/\]/g,"\\]")}var D=class extends h.PluginSettingTab{constructor(e,t,i){super(e,t);this.markInputCache={};this.otherInputCache={};this.plugin=t,this.tc=i}async save(){C.sanitize(this.plugin,this.newSettings),this.tc.isDirty(this.newSettings)&&(this.tc.handlerChanged(this.newSettings)&&new h.Notice("Updated Live Preview settings. Restart Obsidian to apply changes."),this.tc.init(this.newSettings),await this.plugin.saveSettings(),this.tc.notify("(TC) Configuration saved"))}hide(){this.save()}display(){this.newSettings=JSON.parse(JSON.stringify(this.tc.settings)),this.drawElements()}drawElements(){this.containerEl.empty(),this.containerEl.addClass("task-collector-settings"),new h.Setting(this.containerEl).setHeading().setName("Task Collector"),new h.Setting(this.containerEl).setName("Save settings").setClass("task-collector-save-reset").addButton(e=>e.setIcon("reset").setTooltip("Reset to previously saved (or generated) values").onClick(()=>{this.newSettings=JSON.parse(JSON.stringify(this.tc.settings)),this.display(),this.tc.notify("(TC) Configuration reset")})).addButton(e=>{e.setIcon("save").setTooltip("Save current values").onClick(async()=>{await this.save()}),this.saveButton=e.buttonEl}),new h.Setting(this.containerEl).setName("Task collection").setDesc("Enable task collection (additional task group settings when enabled)").addToggle(e=>e.setValue(this.newSettings.collectionEnabled).onChange(async t=>{let i=t!==this.newSettings.collectionEnabled;this.newSettings.collectionEnabled=t,i&&this.drawElements()})),new h.Setting(this.containerEl).setName("Define task mark cycle").setDesc("Specify characters (as a string) for Previous/Next commands. Use the button to include checkbox removal in the cycle.").addText(e=>e.setPlaceholder("").setValue(this.newSettings.markCycle.replace("\xA7","")).onChange(async t=>{this.newSettings.markCycle=[...new Set(t)].join("")})).addExtraButton(e=>{let t=e.setTooltip(`Include checkbox removal in the cycle: ${this.newSettings.markCycleRemoveTask}`).setIcon("cross-in-box").onClick(()=>{this.newSettings.markCycleRemoveTask=!this.newSettings.markCycleRemoveTask,t.classList.toggle("is-active",this.newSettings.markCycleRemoveTask),e.setTooltip(`Include checkbox removal in the cycle: ${this.newSettings.markCycleRemoveTask}`)}).extraSettingsEl;t.classList.toggle("is-active",this.newSettings.markCycleRemoveTask)}),new h.Setting(this.containerEl).setName("Convert non-list lines").setDesc("Converts non-list lines when marking tasks").addToggle(e=>e.setValue(this.newSettings.convertEmptyLines).onChange(async t=>{this.newSettings.convertEmptyLines=t})),new h.Setting(this.containerEl).setName("Skip matching sections").setDesc("When collecting tasks, skip content of sections that match the specified pattern").addText(e=>e.setPlaceholder("").setValue(this.newSettings.skipSectionMatch).onChange(async t=>{this.newSettings.skipSectionMatch=t})),new h.Setting(this.containerEl).setHeading().setName("Task groups"),this.containerEl.createEl("p",{text:"Task collector configures tasks in groups. Each group can be associated with one or more task marks ('x' or '>'). The default group configuration will apply to any mark not otherwise assigned to a group."}),this.containerEl.createEl("p",{text:"Marks that you define within the following groups appear in the selection modal. Those marks that 'complete' a task will appear in the top row."}),this.groupList=this.containerEl.createEl("dl"),this.showTaskGroups(),new h.Setting(this.containerEl).setClass("tc-create-task-group").addButton(e=>e.setTooltip("Add a new task group").setButtonText("+").onClick(()=>{let t=`group-${Object.values(this.newSettings.groups).length}`;C.createSettingsGroup(this.newSettings.groups,t,{}),this.showTaskGroups()})),new h.Setting(this.containerEl).setHeading().setName("Menus and modals"),this.containerEl.createEl("p",{text:"Task Collector creates commands that can be bound to hotkeys or accessed using slash commands for marking tasks. The following settings add right click context menu items for those commands."}),new h.Setting(this.containerEl).setName("Click handling: Prompt when the checkbox is clicked in Reading or Live preview mode").setDesc("When you click a checkbox, display a panel that allows you to select (with mouse or keyboard) the value to assign.").addToggle(e=>e.setValue(this.newSettings.previewClickModal).onChange(async t=>{this.newSettings.previewClickModal=t})),new h.Setting(this.containerEl).setName("Add '(TC) Mark task' menu item").setDesc("Add an item to the right-click menu to mark the task on the current line (or within the current selection). This menu item will trigger a quick pop-up modal to select the desired mark value.").addToggle(e=>e.setValue(this.newSettings.contextMenu.markTask).onChange(async t=>{this.newSettings.contextMenu.markTask=t})),new h.Setting(this.containerEl).setName("Add `(TC) Collect tasks` menu item").setDesc("Add an item to the right-click menu to collect tasks (based on task configuration).").addToggle(e=>e.setValue(this.newSettings.contextMenu.collectTasks).onChange(async t=>{this.newSettings.contextMenu.collectTasks=t})),new h.Setting(this.containerEl).setName("Add '(TC) Reset all tasks' command and menu item").setDesc("Add a command and an item to the right-click menu to reset/clear all tasks in the current file.").addToggle(e=>e.setValue(this.newSettings.contextMenu.resetAllTasks).onChange(async t=>{this.newSettings.contextMenu.resetAllTasks=t})),new h.Setting(this.containerEl).setHeading().setName("Other settings"),new h.Setting(this.containerEl).setName("Hide notifications").setDesc("Hide pop-up notification messages (messages will be logged in the developer console)").addToggle(e=>e.setValue(this.newSettings.hideNotifications).onChange(async t=>{this.newSettings.hideNotifications=t})),new h.Setting(this.containerEl).setName("Debug").setDesc("Enable debug messages").addToggle(e=>e.setValue(this.newSettings.debug).onChange(async t=>{this.newSettings.debug=t}))}showTaskGroups(){this.markInputCache={},this.otherInputCache={},this.groupList.empty(),this.clearButtonErrors(),this.createGroupItem(this.newSettings.groups[u]);for(let e of Object.values(this.newSettings.groups))e.name!==u&&this.createGroupItem(e)}createGroupItem(e){let t=this.groupList.createEl("dt"),i=this.groupList.createEl("dd"),n=new h.Setting(t).setName("Group name").setDesc("Name for this group").setClass("task-group-name");if(e.name===d&&n.addExtraButton(a=>{a.setIcon("info").setTooltip("This is a special group that supports appending text to arbitrary lines of text").setDisabled(!0)}),n.addText(a=>{a.setPlaceholder(T).setValue(e.name).setDisabled(e.name===u).onChange((0,h.debounce)(o=>{let c=this.newSettings.groups[o];o?c&&c!==e?(a.inputEl.addClass("data-value-error"),a.inputEl.setAttribute("aria-label","This name is already used by another group")):(a.inputEl.removeClass("data-value-error"),a.inputEl.removeAttribute("aria-label"),C.moveGroup(this.newSettings.groups,e.name,o),o===d&&(e.marks=f,this.drawElements())):(a.inputEl.addClass("data-value-error"),a.inputEl.setAttribute("aria-label","A group name is required.")),this.testForErrors()},50,!0)),this.addToCache(a.inputEl,"name-setting")}),n.addExtraButton(a=>{a.setIcon(e.name===u?"info":"trash").setTooltip(e.name===u?"Default task settings":"Delete this group").setDisabled(e.name===u).onClick(async()=>{delete this.newSettings.groups[e.name],this.showTaskGroups()})}),e.name===u?n.controlEl.addClass("default-group"):e.name===d&&n.controlEl.addClass("text-only-group"),e.name!==d){let a=new h.Setting(i).setName("Task marks").setClass("task-marks");e.name!==u?(a.addToggle(o=>{o.setValue(e.complete),o.setTooltip("If enabled, this group represents completed items. Completed items appear in the top row of the selection menu.").onChange(async c=>{e.complete=c})}),a.setDesc("Set one or marks associated with this group as a string. e.g. '>?!'. Use a space for unmarked tasks. Enable the toggle if this group represents completed tasks.")):a.setDesc("Set one or marks associated with this group as a string. e.g. '>?!'. Use a space for unmarked tasks. "),a.addText(o=>{o.setPlaceholder("xX").onChange((0,h.debounce)(c=>{let l=C.sanitizeMarks(c);l!==c&&(o.inputEl.value=l),l!==e.marks&&(this.removeMarks(e.marks,o.inputEl),e.marks=l,a.controlEl.setAttribute("marks",e.marks),this.findDuplicates(o.inputEl))},50,!0)),e.marks=C.sanitizeMarks(e.marks),o.setValue(e.marks),a.controlEl.setAttribute("marks",e.marks),this.findDuplicates(o.inputEl)})}new h.Setting(i).setName(`Append date to ${this.getDescription(e)}`).setDesc(`Append today's date in the given moment.js format to the end of the ${this.getDescription(e)}`).addMomentFormat(a=>{a.setPlaceholder("YYYY-MM-DD").setValue(e.appendDateFormat).onChange((0,h.debounce)(o=>{try{let c=window.moment().format(o);a.inputEl.removeClass("data-value-error"),a.inputEl.setAttribute("aria-label",c),e.appendDateFormat=o}catch(c){a.inputEl.addClass("data-value-error"),a.inputEl.setAttribute("aria-label","An error occurred parsing this moment string. See log for details."),console.error(`Error parsing specified date format for ${e.name}: ${o}`,c)}this.testForErrors()},200,!0)),this.addToCache(a.inputEl,"moment-format")}),new h.Setting(i).setName(`Remove text matching pattern from ${this.getDescription(e)}`).setDesc(`Text matching this regular expression will be removed from ${this.getDescription(e)}. Be careful! Test your expression first. The global flag ('g') is used for a per-line match.`).addText(a=>a.setPlaceholder(" #(todo|task)").setValue(e.removeExpr).onChange((0,h.debounce)(o=>{try{B.tryRemoveTextRegex(o),e.removeExpr=o,this.tc.logDebug("remove regex",e.name,e.removeExpr)}catch(c){console.error(`Error parsing specified text replacement regular expression for ${e.name}: ${o}`,c)}},50,!0))),new h.Setting(i).setName("Register '(TC) Mark with... ' command").setDesc(e.name===d?"A command will be registered to append text to selected lines":"A command will be registered for each mark in the group.").addToggle(a=>a.setValue(e.registerCommand).onChange(o=>{e.registerCommand=o})),new h.Setting(i).setName("Add '(TC) Mark with... ' menu item").setDesc("A right-click menu item will be added for each mark in the group.").addToggle(a=>a.setValue(e.useContextMenu).onChange(async o=>{e.useContextMenu=o})),this.newSettings.collectionEnabled&&e.name!==d&&(e.collection||(e.collection=JSON.parse(JSON.stringify(O))),new h.Setting(i).setName("Area heading").setClass("area-heading").setDesc("Marked tasks will be collected and moved under the specified heading. Task collection for a group only occurs when an area heading is configured.").addText(a=>a.setPlaceholder("## Example").setValue(e.collection.areaHeading).onChange(async o=>{e.collection.areaHeading=o})),new h.Setting(i).setName("Remove checkbox").setClass("remove-checkbox").setDesc("When a task is collected, remove the checkbox").addToggle(a=>a.setValue(e.collection.removeCheckbox).onChange(async o=>{e.collection.removeCheckbox=o})))}removeMarks(e,t){let i=e?e.split(""):[];this.tc.logDebug(`removeMarks begin: '${e}'`,this.markInputCache),t.hasClass("no-marks-defined")&&(t.removeClass("no-marks-defined"),t.removeClass("data-value-error"),t.removeAttribute("aria-label"));for(let n of i)if(this.tc.logDebug(`(TC): remove mark '${n}'`,this.markInputCache[n]),this.markInputCache[n]){let a=this.markInputCache[n];if(a.delete(t),this.tryRemoveConflict(n,t),a.size===1)for(let o of a)this.tryRemoveConflict(n,o)}this.tc.logDebug(`removeMarks end: '${e}'`,this.markInputCache)}findDuplicates(e){let t=e.value?e.value.split(""):[];this.tc.logDebug(`findDuplicates begin: '${e.value}'`,t,e,this.markInputCache);for(let i of t)if(this.markInputCache[i]){let n=this.markInputCache[i];if(n.add(e),n.size>1){for(let a of n)this.trySetConflict(i,a);console.error(`(TC) More then one group uses task mark ${this.showMark(i)}`)}}else this.markInputCache[i]=new Set,this.markInputCache[i].add(e);t.length===0&&(e.addClass("no-marks-defined"),e.addClass("data-value-error"),e.setAttribute("aria-label",this.newSettings.groups[d]?"Must define one or more marks for this group.":`Must define one or more marks for this group. Change the name to '${d}' for special text-only behavior.`),this.tc.logDebug(`findDuplicates end (empty): '${e.value}'`,e,this.markInputCache)),this.tc.logDebug(`findDuplicates end: '${e.value}'`,e,this.markInputCache),this.testForErrors()}trySetConflict(e,t){let i=t.getAttribute("conflict")||"",n=C.sanitizeMarks(i+e);t.setAttribute("conflict",n),t.addClass("data-value-error"),t.setAttribute("aria-label",`More than one task group uses ${this.showMark(n)}`),this.tc.logDebug(`conflicts for '${t.value}': '${this.showMark(n)}'`)}tryRemoveConflict(e,t){if(!t.hasAttribute("conflict"))return;let i=t.getAttribute("conflict").replace(e,"");i.length===0?(t.removeAttribute("conflict"),t.removeClass("data-value-error"),t.removeAttribute("aria-label")):(t.removeAttribute("conflict"),this.trySetConflict(i,t))}getDescription(e){return e.name===d?"selected lines of text":"selected task(s)"}showMark(e){return e===f?"(empty)":e}clearButtonErrors(){this.saveButton.removeClass("data-value-error"),this.saveButton.removeAttribute("aria-label")}testForErrors(){let e=Object.values(this.markInputCache).flatMap(i=>Array.from(i.values())).find(i=>i.hasClass("data-value-error")),t=Object.values(this.otherInputCache).find(i=>i.hasClass("data-value-error"));e||t?(this.saveButton.addClass("data-value-error"),this.saveButton.setAttribute("aria-label","There are configuration errors. Correct those before saving.")):(this.saveButton.removeClass("data-value-error"),this.saveButton.removeAttribute("aria-label"))}addToCache(e,t){let i=Object.values(this.otherInputCache).length;this.otherInputCache[`${t}-${i}`]=e,e.setAttribute("cache-id",`${t}-${i}`)}removeFromCache(e){let t=e.getAttribute("cache-id");t&&delete this.otherInputCache[t]}};var L=class extends v.Plugin{constructor(){super(...arguments);this.handlersRegistered=!1;this.commandsRegistered=!1;this.cmExtension=[]}async onload(){console.info(`loading Task Collector (TC) v${this.manifest.version}`),this.tc=new A,this.addSettingTab(new D(this.app,this,this.tc)),await this.loadSettings(),this.tc.settings.previewClickModal&&(this.cmExtension.push(pe(this,this.tc)),this.registerEditorExtension(this.cmExtension)),this.registerCommands(),this.registerHandlers(),this.api=new x(this.app,this.tc)}async markInCycle(e,t){let i=this.app.workspace.getActiveFile();await this.app.vault.process(i,n=>this.tc.markInCycle(n,e,t))}async editLines(e,t){let i=this.app.workspace.getActiveFile();await this.editLinesInFile(i,e,t)}async editLinesInFile(e,t,i){await this.app.vault.process(e,n=>this.tc.markSelectedTask(n,t,i))}async collectTasks(){let e=this.app.workspace.getActiveFile();await this.app.vault.process(e,t=>this.tc.moveAllTasks(t))}async resetAllTasks(){let e=this.app.workspace.getActiveFile();await this.app.vault.process(e,t=>this.tc.resetAllTasks(t))}getCurrentLinesFromEditor(e){this.tc.logDebug("from: %o, to: %o, anchor: %o, head: %o, general: %o",e.getCursor("from"),e.getCursor("to"),e.getCursor("anchor"),e.getCursor("head"),e.getCursor());let t,i,n=[];if(e.somethingSelected()){t=e.getCursor("from"),i=e.getCursor("to");for(let a=t.line;a<=i.line;a++)n.push(a)}else t=e.getCursor(),n.push(t.line);return{start:t,end:i,lines:n}}buildContextMenu(e,t,i){this.tc.settings.contextMenu.markTask&&(e.addItem(n=>n.setTitle("(TC) Mark Task").setIcon("check-square").onClick(async()=>{this.tc.logDebug("Mark task",e,t,i);let a=await E(this.app,this.tc);a&&(await this.editLines(a,i.lines),this.restoreCursor(i,t.editor))})),this.tc.settings.markCycle&&(e.addItem(n=>n.setTitle("(TC) Mark with next").setIcon("forward").onClick(async()=>{this.tc.logDebug("Mark with next",e,t,i),await this.markInCycle("NEXT",i.lines),this.restoreCursor(i,t.editor)})),e.addItem(n=>n.setTitle("(TC) Mark with previous").setIcon("reply").onClick(async()=>{this.tc.logDebug("Mark with previous",e,t,i),await this.markInCycle("PREV",i.lines),this.restoreCursor(i,t.editor)}))));for(let[n,a]of Object.entries(this.tc.cache.marks))a.useContextMenu&&e.addItem(o=>o.setTitle(n===f?"(TC) Append text":`(TC) Change to '[${n}]' (${a.name})`).setIcon("check-circle").onClick(async()=>{this.tc.logDebug(`Change to '${n}'`,e,t,i),await this.editLines(n,i.lines),this.restoreCursor(i,t.editor)}));this.tc.settings.contextMenu.resetAllTasks&&e.addItem(n=>n.setTitle("(TC) Reset all tasks").setIcon("blocks").onClick(async()=>{this.tc.logDebug("Reset all tasks",e,t),await this.resetAllTasks(),this.restoreCursor(i,t.editor)})),this.tc.settings.collectionEnabled&&this.tc.settings.contextMenu.collectTasks&&e.addItem(n=>n.setTitle("(TC) Collect tasks").setIcon("tornado").onClick(async()=>{await this.collectTasks(),this.restoreCursor(i,t.editor)}))}restoreCursor(e,t){e.lines.length>1?t.setSelection(e.start,e.end):t.setCursor(e.start)}registerCommands(){if(!this.commandsRegistered){this.tc.logDebug("register commands"),this.commandsRegistered=!0;let e={id:"task-collector-mark",name:"Mark task",icon:"check-square",editorCallback:async(t,i)=>{let n=await E(this.app,this.tc);if(n){let a=this.getCurrentLinesFromEditor(t);await this.editLines(n,a.lines),this.restoreCursor(a,t)}}};if(this.addCommand(e),this.tc.settings.collectionEnabled){let t={id:"task-collector-move-completed-tasks",name:"Collect tasks",icon:"tornado",callback:async()=>{this.collectTasks()}};this.addCommand(t)}if(this.tc.settings.markCycle){let t={id:"task-collector-mark-next",name:"Mark with next",icon:"forward",editorCallback:async(n,a)=>{this.tc.logDebug(`${t.id}: callback`,n,a);let o=this.getCurrentLinesFromEditor(n);await this.markInCycle("NEXT",o.lines),this.restoreCursor(o,n)}};this.addCommand(t);let i={id:"task-collector-mark-prev",name:"Mark with previous",icon:"reply",editorCallback:async(n,a)=>{this.tc.logDebug(`${i.id}: callback`,n,a);let o=this.getCurrentLinesFromEditor(n);await this.markInCycle("PREV",o.lines),this.restoreCursor(o,n)}};this.addCommand(i)}for(let[t,i]of Object.entries(this.tc.cache.marks))if(i.registerCommand){let n={id:`task-collector-mark-task-${t}`,name:t===f?"Append text":`Mark with '${t}'`,icon:t===f?"list-plus":"check-circle",editorCallback:async(a,o)=>{let c=this.getCurrentLinesFromEditor(a);this.tc.logDebug(`${n.id}: callback`,c,a,o),await this.editLines(t,c.lines),this.restoreCursor(c,a)}};this.addCommand(n)}if(this.tc.settings.contextMenu.resetAllTasks){let t={id:"task-collector-reset-all-tasks",name:"Reset all tasks",icon:"blocks",callback:async()=>{this.resetAllTasks()}};this.addCommand(t)}}}unregisterCommands(){this.tc.logDebug("unregister commands"),this.commandsRegistered=!1;let e=Object.keys(this.app.commands.commands).filter(t=>t.startsWith("task-collector-"));for(let t of e)this.app.commands.removeCommand(t)}registerHandlers(){this.handlersRegistered||(this.tc.logDebug("register handlers"),this.handlersRegistered=!0,this.tc.cache.useContextMenu&&(this.editTaskContextMenu=this.app.workspace.on("editor-menu",async(e,t,i)=>{this.buildContextMenu(e,i,this.getCurrentLinesFromEditor(t))}),this.registerEvent(this.editTaskContextMenu)),(this.tc.cache.useContextMenu||this.tc.settings.previewClickModal)&&(this.postProcessor=(e,t)=>{let i=e.querySelectorAll(".task-list-item-checkbox"),n=t.getSectionInfo(e);if(!i.length||!t.sourcePath||!n)return;let a=this.app.vault.getFileByPath(t.sourcePath),{lineStart:o}=n;this.tc.logDebug("markdown postprocessor",a,o,t,n,i);let c=t.containerEl;for(;c&&!c.classList.contains("markdown-reading-view")&&!c.classList.contains("markdown-embed");)c=c.parentNode;if(c.hasAttribute("src")){let l=c.getAttribute("src"),g=l.split("#^")[1],k=l.split("#")[1],m=this.app.metadataCache.getFileCache(a);if(g){let p=m.blocks[g];p&&(o+=p.position.start.line)}else if(k){let p=m.headings.find(w=>w.heading===k);p&&(o+=p.position.start.line)}}for(let l of Array.from(i)){let g=Number(o)+Number(l.dataset.line);this.tc.cache.useContextMenu&&this.registerDomEvent(l.parentElement,"contextmenu",k=>{let m=this.app.workspace.getActiveViewOfType(v.MarkdownView);if(m){let p=new v.Menu;this.buildContextMenu(p,m,{start:{line:g,ch:0},lines:[g]}),p.showAtMouseEvent(k)}}),this.tc.settings.previewClickModal&&this.registerDomEvent(l,"click",async k=>{k.stopImmediatePropagation(),k.preventDefault();let m=await E(this.app,this.tc);m&&(l.checked=m!==" ",l.parentElement.dataset.task=m,await this.editLinesInFile(a,m,[g]))})}},this.registerMarkdownPostProcessor(this.postProcessor)))}unregisterHandlers(){this.tc.logDebug("unregister handlers"),this.handlersRegistered=!1,this.editTaskContextMenu&&(this.app.workspace.offref(this.editTaskContextMenu),this.editTaskContextMenu=null),this.postProcessor&&(v.MarkdownPreviewRenderer.unregisterPostProcessor(this.postProcessor),this.postProcessor=null)}onunload(){console.log("unloading Task Collector"),this.unregisterCommands(),this.unregisterHandlers()}async loadSettings(){let e=Object.assign({},await this.loadData());this.tc.init(await C.constructSettings(this,e))}async saveSettings(){await this.saveData(this.tc.settings),this.handlersRegistered&&(this.unregisterHandlers(),this.registerHandlers()),this.commandsRegistered&&(this.unregisterCommands(),this.registerCommands())}};function pe(r,s){return J.ViewPlugin.fromClass(class{constructor(e){this.view=e,this.tcp=r,this.eventHandler=async t=>{let{target:i}=t,n=this.tcp.app.workspace.getActiveFile();if(!n||!(i instanceof HTMLInputElement)||i.type!=="checkbox"||i.classList.contains("metadata-input-checkbox"))return!1;r.tc.logDebug("TC ViewPlugin: click",i,i.classList),t.stopImmediatePropagation(),t.preventDefault();let a=await E(this.tcp.app,s);return a?(await this.tcp.app.vault.process(n,o=>{let c=this.view.posAtDOM(i),l=e.state.doc.lineAt(c),g=o.split(`
`).findIndex(m=>m===l.text);if(s.logDebug("TC ViewPlugin: mark task",n.path,a,l,g),r.tc.anyTaskMark.test(l.text))return s.markSelectedTask(o,a,[g]);let k=Number(i.dataset.line);return s.markSelectedTask(o,a,[g+k])}),!0):!1},this.eventHandler.bind(this),this.view.dom.addEventListener("click",this.eventHandler),r.tc.logDebug("TC ViewPlugin: create click handler")}destroy(){this.view.dom.removeEventListener("click",this.eventHandler),r.tc.logDebug("TC ViewPlugin: destroy click handler")}})}var ge=L;
