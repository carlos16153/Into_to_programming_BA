resp=""
while(resp!="5"):
    print("MENU")
    print("1.sumar numeros")
    print("2.restar numeros ")
    print("3.multplicar numeros")
    print("4.dividir numeros")
    print("5.salir")
    resp=input("\n\t\6")
    if(resp!="5"):
        num_1=float(input("numero 1: "))
        num_2=float(input("numero 2: "))
    if(resp=="1"):
        total=num_1+num_2
    elif(resp=="2"):
        total=num_1-num_2
    elif(resp=="3"):
        total=num_1*num_2
    elif(resp=="4"):
        total=num_1/num_2 
    if(resp!="5"):
        print(f"es igual a:{total}")
        print(f"\033[92mel total es \033[94m{total}\033[0m")