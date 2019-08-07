import { PipeTransform, Pipe } from '@angular/core';

// @Pipe({ name: 'highlight' })
// export class HighlightPipe implements PipeTransform {
//   transform(text: string, search): string {
//     return search
//       ? text.replace(
//           new RegExp(search, 'i'),
//           `<span style="color: red;">${search}</span>`
//         )
//       : text;
//   }
// }

@Pipe({ name: 'highlight' })
export class HighlightPipe implements PipeTransform {
  transform(text: string, search): string {
    return search
      ? text.replace(new RegExp(search, 'i'), `--${search}--`)
      : text;
  }
}

// @Pipe({ name: 'highlight' })
// export class HighlightPipe implements PipeTransform {
//   transform(text: string, [search]): string {
//     let s = 'CatDogCAT';
//     let re = new RegExp('cat', 'gi');
//     let matches = [...s.matchAll(re)].reverse();
//     let el = document.createElement('div');
//     el.style.display = 'inline';
//     let splits = [...s.split(re)];
//     splits.forEach(x => {
//       if (x === '') {
//         let y = document.createElement('span');
//         y.textContent = matches.pop();
//         y.style.color = 'green';
//         y.style.fontWeight = 'bold';
//         el.appendChild(y);
//       } else {
//         let z = document.createElement('span');
//         z.textContent = x;
//         el.appendChild(z);
//       }
//     });
//     return `<span style="color: green; font - weight: bold; ">Cat</span><span>Dog</span><span style="color: green; font - weight: bold;">CAT</span>`;
//   }
// }

/** Usage:
 * <input type="text" [(ngModel)]="filter">
 * <div [innerHTML]="myAwesomeText  | highlight : filter"></div>
 *
 */

/*
{
    let term = 'cat';
    //let s = "catdogcatcatcat"; //can't have this
    let s = "CatDogCAT"
    let re = new RegExp(term, 'gi');
    let matches = [...s.matchAll(re)].reverse();
    let el = document.createElement("div");
    el.style.display='inline';
    let splits = [...s.split(re)];
    splits.forEach(x => {if (x === '') {let y = document.createElement("span"); y.textContent = matches.pop(); y.style.color='green'; y.style.fontWeight='bold'; el.appendChild(y)} else {let z = document.createElement("span"); z.textContent = x; el.appendChild(z);}})
    console.log(el);
    document.write(el.innerHTML)
}
 */

/*


import {PipeTransform, Pipe} from 'angular2/core';



@Pipe({ name: 'highlight' })

export class HighLightPipe implements PipeTransform {

  transform(text: string, [search]): string {

    return search ? text.replace(new RegExp(search, 'i'), `<span class="highlight">${search}</span>`) : text;

  }

}



/** Usage:

* <input type="text" [(ngModel)]="filter">

* <div [innerHTML]="myAwesomeText  | highlight : filter"></div>

*

*/
