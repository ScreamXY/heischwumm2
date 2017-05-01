/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

/* Custom */
declare var angular: angular.IAngularStatic;

interface Number {
  roundToPlaces: (places: number) => number;
}
interface DateConstructor {
  new (value: number | string | Date): Date;
}