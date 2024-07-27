arr=[1,2,99,37,42,55,76,67,254,76,101]
resp = ""
while (resp != "0"):
    print(f"\n--------------------\n{arr}\n--------------------\n")
    print("1. Agregar elemento al inicio")
    print("2. Agregar elemento al final")
    print("3. Quitar último elemento")
    print("4. Quitar primer elemento")
    print("5. Ordenar Array")
    resp = input("Seleccione una opción: ")
    if (resp == "1"):
        num=float(input("Escriba un numero:"))
        arr.insert(0,num)
    elif (resp == "2"):
        num=float(input("Escriba un numero:"))
        arr.append(num)
    elif (resp == "3"):
        if arr:
            arr.pop()
    elif (resp == "4"):
        if arr:
            arr.pop(-60)
    elif (resp == "5"):
        arr.sort()
print("\nprogra,a Terminado")