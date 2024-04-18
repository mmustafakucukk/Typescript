function selamVer(isim: string){
    return "Merhaba" + isim;
}

let mesaj = selamVer("Mustafa");

console.log(mesaj);


let sayi:number = 12;
sayi = 10;
sayi = 3.5;

let sehir:string;

sehir = "Kayseri";

let dogruMu:boolean;
dogruMu = true;

let sayilar: number[] = [1,2,3,4,5];
let sayilar2: Array<number> = [6,7,8,9,10];
let sehirler: Array<string> = ["Kayseri","Adana","Mersin"];

enum Renk {
    kirmizi = 1, 
    sari,
    mavi,
    siyah
}

let renk : Renk = Renk.kirmizi

let deger : any = "Ankara"
deger = 2
deger = true
deger = null


let deger2: void = undefined

function selamVer2(): void{
    console.log("Merhaba");
}

selamVer2();

let sayi1: number = 10;
let sayi2: number = 10;


function topla(x:number=9,y?:number): number{
    if (y){
        return x+y;
    }
    return x;
}

let sonuc: number = topla(2);
// console.log(sonuc);


function topla3(x:number,...digerleri:number[]):string{
    return x + digerleri.join("");
}

console.log(topla3(3))

