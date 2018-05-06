function confirm_delete(){
    if (confirm("Soll das Todo wirklich gelöscht werden?")) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
    }
} 