import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'highlight' })
export class HighlightPipe implements PipeTransform {
  transform(text: string, search): string {
    var pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    pattern = pattern
      .split(' ')
      .filter(t => {
        return t.length > 0;
      })
      .join('|');
    var regex = new RegExp(pattern, 'gi');

    return search
      ? text.replace(
          regex,
          //match => `<span style="color:green; font-weight:bold">${match}</span>`
          match => `<span class="highlight">${match}</span>`
        )
      : text;
  }
}

// @Pipe({ name: 'highlight' })
// export class HighlightPipe implements PipeTransform {
//   transform(text: string, search): string {
//     return search
//       ? text.replace(
//           new RegExp(search, 'i'),
//           `<span style="color: green; font-weight: bold;">${search}</span>`
//         )
//       : text;
//   }
// }

// @Pipe({ name: 'highlight' })
// export class HighlightPipe implements PipeTransform {
//   transform(text: string, search): string {
//     return search
//       ? text.replace(new RegExp(search, 'i'), `--${search}--`)
//       : text;
//   }
// }

// works with 'm' ... but not 'o'?
// @Pipe({ name: 'highlight' })
// export class HighlightPipe implements PipeTransform {
//   transform(text: string, term: string): string {
//     console.group('Finding `' + term + '` in `' + text + '`:');
//     let s = text;
//     let re = new RegExp(term, 'gi');
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
//         let z = document.createTextNode(x);
//         el.appendChild(z);
//       }
//     });
//     console.log(el.innerHTML);
//     console.groupEnd();
//     return el.innerHTML;
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
