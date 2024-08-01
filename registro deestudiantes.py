nombre=[[" 33642612" , "Carlos Adrian "],[ " 15957531","Erik Scala "],[ " 32549844","Melani Velasque"]]
res=""
while(res!="0"):
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
        for i in nombre:
            if(search == i[0]):
                print(f"\n\t{search} {i[0]}")
                flag = 1;
        if (not flag):
            print("estudiante no encaontrado")
        if search in nombre:
            print(f"el cedula {search} esta en la lista")
        else:
            print(f"el cedula {search} no esta en la lista")
    elif(res=="3"):
        if nombre:
            print(f"se ha eliminadoa {nombre.pop()}")
            if nombre:
                print("fin del archivo")
    elif(res=="6"):
        for i in range(len(nombre)):
            print(f"ci:{nombre[i][0]},estudiante:{nombre[i][1]}")