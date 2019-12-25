# Event bus pattern
`@Injectable()
export class EventBusService {
 private subject = new Subject<any>();
 on(event: Events, action: any): Subscription {
 return this.subject
 .pipe(
 filter((e: EmitEvent) => {
 return e.name === event;
 }),
 map((event: EmitEvent) => {
 return event.value;
 })
 )
 .subscribe(action);
 }
 emit(event: EmitEvent) {
 this.subject.next(event);
 }
}`

# Handle unsubscription
https://github.com/wardbell/subsink

# Subjects
1. Subject --> Normal, no mantiene nada de informacion
2. Behavior --> Mantiene el ultimo dato que fue enviado
3. Replay --> Mantiene el historial
4. Async --> 