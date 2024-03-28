import Swal from 'sweetalert2';
import { nextTick } from '@vue/runtime-core';

export function show_alerta(msj,icon,focus){
    if(focus !== ''){
        nextTick( ()=> focus.value.focus());
    }
    Swal.fire({
        title:msj,icon:icon,buttonsStyling:true
    });
}

export function confirmation(name,url,redirect){
    const alert =Swal.mixin({buttonsStyling:true});
    alert.fire({
        title:'Are you sure delete '+name+' ?',
        icon:'question',showCancelButton:true,
        confirmButtonText:'<i class="fa-solid fa-check"></i> Yes, delete',
        cancelButtonText:'<i class="fa-solid fa-ban"></i> Cancel'
    }).then((result) =>{
        if(result.isConfirmed){


        }
    });
    
}
export async function sendRequest(method, params,url,redirect=''){
    

}