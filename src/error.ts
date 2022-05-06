interface IErrors {
    [index: string]: Array<string>
}
class Errors {
    private errors: IErrors;
    constructor() {
        this.errors = {}
    }

    get(field: string){
        if (this.errors[field]){
            return this.errors[field][0]
        }
    }

    has(field: string){
        return this.errors.hasOwnProperty(field)
    }

    record(errors: IErrors){
        this.errors = {...errors, ...this.errors}
    }

    clear(field: string){
        if (field){
            // @ts-ignore
            delete this.errors[field]
            return;
        }
        this.errors = {}
    }

    any(): boolean{
        return Object.keys(this.errors).length > 0
    }
}

export default Errors