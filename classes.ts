class Ev{
    //private _odaSayisi:number; Sadece Ev sınıfı kullanabilir
    _odaSayisi:number;
    protected _pencereSayisi:number; //Sadece Ev sınıfından miras alan sınıflar kullanabilir
    _kat:number;
    constructor(odaSayisi:number, pencereSayisi:number, kat:number){
        this._odaSayisi = odaSayisi,
        this._kat = kat,
        this._pencereSayisi = pencereSayisi
        }
    zilCal(){
        console.log("Kapı Çalındı");
    }
}

let ev = new Ev(3,5,8);
console.log(ev._odaSayisi);
ev.zilCal()

class Kisi{
    _isim:string;
    get isim():string{
        return "Sayın " + this._isim;
    }
    set isim {
        this._isim = "Fatmanur";
    }
    kisiselBilgiler(){
        console.log("Kişi bilgileri kaydedildi.")
    }
}

class Personel extends Kisi{
    maasAl(){
        console.log("Maaş alındı.")
    }
}

let kisi = new Kisi();
kisi.kisiselBilgiler();

let personel = new Personel()
personel.kisiselBilgiler();
personel.maasAl();
