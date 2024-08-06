def convertir_a_texto(lista):
    return str(lista)
def guardar_en_archivo(lista, nombre_archivo):
    with open(nombre_archivo, 'w') as archivo:
        for item in lista:
            linea = ','.join(item) + '\n'
            archivo.write(linea)

nombre=""#[["33642612","Carlos Adrian"],[ "15957531","Erik Scala"],[ "32549844","Melani Velasque"]]
res=""
while(res!="0"):
    flag=0
    print(f"\n-----------------\n{nombre}\n----------------\n")
    print("registro de estudiantes")
    print("1.agregar estudiantes")
    print("2.buscar estudiantes")
    print("3.eliminar estudiantes")
    print("4.guardar en un archivo")
    print("5.cargar desde un archibo")
    print("6.lista de estudiantes")
    print("0.salir")
    res=input("elige una odcion: ")
    if(res=="1"):
        nombre.append([input("C.I. del estudiante:"),input("nombre y apellido del estudiante: ").title()])
    elif(res=="2"):
        search=input("ingrese la cedula del estudiante que quieras buscar: ")
        for estudiante in nombre:
            if(search == estudiante[0]):
                print(f"\n\t{search} {estudiante[1]}")                
                flag = 1
                break
        if (flag==0):
            print("estudiante no encontrado")
    elif(res=="3"):
        if nombre:
            print(f"se ha eliminadoa {nombre.pop()}")
            if nombre:
                print("fin del archivo")
    elif(res=="4"):
            guardar_en_archivo(nombre, 'estudiantes.txt')
    elif(res=="5"):
        with open("estudiantes.txt","r")as archivo:
            lineas=archivo.readlines()

        result = []
        for item in lineas:
            cleaned_item = item.strip()
            split_item = cleaned_item.split(', ')
            result.append(split_item)
        nombre=result
        print(nombre)
    elif(res=="6"):
        for estudiante in range(len(nombre)):
            print(f"ci:{nombre[estudiante][0]},estudiante:{nombre[estudiante][1]}")