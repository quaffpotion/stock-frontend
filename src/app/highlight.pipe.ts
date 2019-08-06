import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "highlight"
})
export class HighlightPipe implements PipeTransform {
  transform(value: string, args?: string): string {
    return value.includes(args) ? value + "yes" : value + "no";
  }
}
