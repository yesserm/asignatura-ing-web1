#include <stdio.h>

///verificar si es un caracter (' ','\n', '\t' ) o no
int checkSpace(char c){
    if(c=='\n'||c==' '||c=='\t'){
        return 1;
    }else{
        return 0;   
    }
}

///si obtiene un caracter ascii valido retorna true
int checkASCII(char c){
    if(c>32&&c<127){
        return 1;
    }else{
        return 0;   
    }
}

///una funcion que imprime el contenido ascii de un fichero
void printFile(FILE *fp){
    char c;
    while((c=fgetc(fp))!=EOF){
        printf("%c", c);
    }
}

////funcion principal
int main(int argc, char **argv){

    FILE *fp=fopen(argv[1],"r");
    if(!fp){
        printf("Error: al abrir el fichero\n");    
    }

    char c=0;
    int numWord=0;
    int numChar=0;
    int flag=0;
    int visiblenumChar=0;
    int newLine=0;

    while((c=fgetc(fp))!=EOF){
        numChar++;
        if(c=='\n'){
            newLine++;
        }
        if(flag && checkSpace(c)){
            numWord++;
            flag=0;     
        }       
        if(checkASCII(c)){
            flag=1;//first ascii read   
            visiblenumChar++;   
        }   
    }

    //Salida del programa
    printf("nombre del fichero: %s\n", argv[1]);
    printf("# todos los caracteres: %d\n", numChar);
    printf("# Caracteres visibles: %d\n", visiblenumChar);
    printf("# Palabras: %d\n", numWord);
    printf("# Nuevas lineas: %d\n", newLine);

    return 0;   
}
