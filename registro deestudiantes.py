nombre=[]
res=""
while(res!="0"):
    print(f"\n-----------------\n{nombre}\n----------------\n")
    print("registro de estudiantes")
    print("1.agregar estudiantes")
    print("2.buscar estudiantes")
    print("3.eliminar estudiantes")
    print("4.guardar en un archivo")
    print("5.cargar desde un archibo")
    print("0.salir")
    res=input("elige una odcion: ")
    if(res=="1"):
        nombre.append(input("ingresa un nombre:").title())
    elif(res=="2"):
        search=input("que nombre quieres buscar: ").title()
        search=search.title()
        if search in nombre:
            print(f"el nombre {search} esta en la lista")
        else:
            print(f"el nombre {search} no esta en la lista")
    elif(res=="3"):
        if nombre:
            nombre.pop()
            print(f"se ha eliminadoa {nombre.pop()}")
            if nombre:
                print("fin del archivo")