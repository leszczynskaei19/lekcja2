function fibo(f){
  if (f == 0)
    return 0;
  if (f == 1)
    return 1;
  return fibo(n-1)+fibo(n-2);
}
document.write(fibo(4));
