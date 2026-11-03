export type Exercise={id:string;name:string;group:string;equipment:string;instructions:string[];tip:string};
export type Item={id:string;exerciseId:string;sets:number;min:number;max:number;rest:number};
export type Routine={id:string;name:string;day:number;items:Item[]};
export type LoggedSet={reps:number;weight:number;done:boolean};
export type Session={id:string;routineId:string;routineName:string;date:string;duration:number;sets:{exerciseId:string;exerciseName:string;values:LoggedSet[]}[]};
export type Measure={date:string;weight:number;waist:number};
export type State={routines:Routine[];sessions:Session[];measurements:Measure[];goal:number};
const ex=(id:string,name:string,group:string,equipment:string,tip:string,instructions:string[]):Exercise=>({id,name,group,equipment,tip,instructions});
export const exercises:Exercise[]=[
ex('bench','Press de banca con barra','Pecho','Barra y banco','Mantén los pies firmes y baja la barra de forma controlada.',['Acuéstate en el banco y retrae los omóplatos.','Baja la barra hacia la parte media del pecho.','Empuja hacia arriba sin rebotar.']),
ex('squat','Sentadilla','Piernas','Barra o peso corporal','Mantén el torso estable y las rodillas alineadas.',['Coloca los pies aproximadamente al ancho de hombros.','Flexiona caderas y rodillas de forma controlada.','Empuja el suelo para volver a subir.']),
ex('legpress','Prensa de piernas','Piernas','Máquina','No despegues la pelvis del respaldo.',['Ajusta asiento y posición de pies.','Flexiona rodillas sin perder contacto con el respaldo.','Extiende piernas sin bloquear bruscamente.']),
ex('row','Remo sentado en polea','Espalda','Polea','Lleva los codos hacia atrás sin balancearte.',['Siéntate con espalda neutra.','Tira del agarre hacia el abdomen.','Regresa lentamente estirando los brazos.']),
ex('incline','Press inclinado con mancuernas','Pecho','Mancuernas y banco','Usa una inclinación moderada de 15–30°.',['Ajusta el banco inclinado.','Baja las mancuernas junto al pecho superior.','Empuja hacia arriba con control.']),
ex('legcurl','Curl femoral','Piernas','Máquina','Evita levantar la cadera del asiento.',['Ajusta el rodillo a tus piernas.','Flexiona las rodillas contra la resistencia.','Vuelve despacio a la posición inicial.']),
ex('lateral','Elevaciones laterales','Hombros','Mancuernas','Sube con los codos ligeramente flexionados.',['Sujeta una mancuerna en cada mano.','Eleva los brazos hacia los lados hasta cerca de los hombros.','Desciende lentamente sin balancearte.']),
ex('triceps','Extensión de tríceps en polea','Tríceps','Polea','Mantén los codos cerca del cuerpo.',['Sujeta la barra o cuerda con codos flexionados.','Extiende los codos sin mover los hombros.','Regresa lentamente.']),
ex('rdl','Peso muerto rumano','Piernas','Barra o mancuernas','Desplaza las caderas atrás y mantén espalda neutra.',['De pie, sujeta el peso frente a los muslos.','Lleva caderas atrás mientras bajas el peso cerca de las piernas.','Vuelve a subir contrayendo glúteos.']),
ex('pulldown','Jalón al pecho','Espalda','Polea alta','Evita tirar de la barra detrás del cuello.',['Sujeta la barra por encima de la cabeza.','Lleva los codos hacia las costillas.','Devuelve la barra con control.']),
ex('shoulder','Press de hombros con mancuernas','Hombros','Mancuernas','Evita arquear excesivamente la espalda.',['Coloca las mancuernas a la altura de los hombros.','Empuja hacia arriba.','Baja lentamente hasta una posición cómoda.']),
ex('chestmachine','Press de pecho en máquina','Pecho','Máquina','Ajusta el asiento para alinear agarres y pecho.',['Ajusta la máquina a tu altura.','Empuja los agarres al frente.','Vuelve lentamente sin perder tensión.']),
ex('biceps','Curl de bíceps con barra EZ','Bíceps','Barra EZ','No balancees el torso.',['Sujeta la barra con agarre cómodo.','Flexiona los codos manteniéndolos junto al cuerpo.','Baja de manera controlada.']),
ex('crunch','Crunch abdominal en polea','Abdomen','Polea','Flexiona el tronco, no solo los brazos.',['Arrodíllate frente a una polea alta.','Contrae el abdomen llevando el tórax hacia la pelvis.','Regresa con control.']),
ex('hack','Sentadilla hack','Piernas','Máquina','Mantén los talones apoyados.',['Ajusta la posición en la máquina.','Flexiona las rodillas de forma controlada.','Empuja con los pies para subir.']),
ex('supportedrow','Remo con pecho apoyado','Espalda','Máquina o banco','Evita despegar el pecho del soporte.',['Apoya el pecho sobre el banco o máquina.','Tira de los agarres hacia las costillas.','Extiende los brazos lentamente.']),
ex('hipthrust','Hip thrust','Glúteos','Banco y barra','Evita hiperextender la zona lumbar.',['Apoya la parte alta de la espalda en un banco.','Eleva las caderas empujando con los talones.','Desciende con control.']),
ex('hammer','Curl martillo','Bíceps','Mancuernas','Mantén las palmas enfrentadas.',['Coloca las mancuernas a los lados.','Flexiona los codos sin girar las muñecas.','Desciende lentamente.']),
ex('overheadtri','Extensión de tríceps sobre la cabeza','Tríceps','Mancuerna o polea','Controla la posición de los codos.',['Coloca el peso por encima de la cabeza.','Flexiona los codos detrás de la cabeza.','Extiende los brazos sin balancearte.']),
ex('plank','Plancha abdominal','Abdomen','Colchoneta','Mantén una línea recta de hombros a talones.',['Apoya antebrazos y puntas de pies.','Contrae abdomen y glúteos.','Mantén la postura respirando normalmente.']),
ex('calf','Elevaciones de pantorrillas','Piernas','Máquina o mancuernas','Recorre el rango de movimiento completo.',['Coloca la parte delantera de los pies en la plataforma.','Eleva los talones.','Desciende lentamente.']),
ex('pushup','Flexiones de pecho','Pecho','Peso corporal','Mantén el tronco firme.',['Coloca las manos ligeramente más anchas que hombros.','Baja el pecho hacia el suelo.','Empuja hasta extender brazos.']),
ex('pullup','Dominadas asistidas','Espalda','Máquina o banda','Evita balancearte.',['Agarra la barra por encima de la cabeza.','Lleva el pecho hacia la barra.','Desciende controladamente.'])];
const it=(exerciseId:string,sets:number,min:number,max:number,rest:number):Item=>({id:crypto.randomUUID(),exerciseId,sets,min,max,rest});
export const defaults=():State=>({goal:2450,measurements:[],sessions:[],routines:[
{id:'a',name:'Full Body A',day:1,items:[it('bench',3,6,10,150),it('legpress',3,8,12,150),it('row',3,8,12,120),it('incline',2,10,12,90),it('legcurl',3,10,15,90),it('lateral',3,12,20,75),it('triceps',2,10,15,75)]},
{id:'b',name:'Full Body B',day:3,items:[it('rdl',3,8,10,150),it('pulldown',3,8,12,120),it('shoulder',3,8,12,120),it('legpress',3,10,12,120),it('chestmachine',3,10,12,90),it('biceps',3,10,15,75),it('crunch',3,12,20,60)]},
{id:'c',name:'Full Body C',day:5,items:[it('hack',3,8,12,150),it('incline',3,8,12,120),it('supportedrow',3,8,12,120),it('hipthrust',3,8,12,120),it('lateral',3,12,20,75),it('hammer',3,10,15,75),it('overheadtri',3,10,15,75),it('plank',2,30,45,60)]}]});
export const dayNames=['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
export const findEx=(id:string)=>exercises.find(e=>e.id===id)||exercises[0];
