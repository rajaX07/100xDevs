#include<iostream>
using namespace std;

bool isPrime(int n)
{
    int count = 0;
    for(int i = 1; i<=n; i++){
        if(n%i == 0)
        {
            count++;
        }
    }
    return (count == 2);
} 

int main()
{

    int n;
    cin>> n;

    // bool ans = isPrime(n);
    // if(ans)
    // {
    //     cout<<"Prime";
    // }
    // else
    // {
    //     cout<< "Not Prime";
    // }
    

    // print all primes from 1 to n
    for(int i = 1; i<= n; i++)
    {
        if(isPrime(i))
        {
            cout<< i << " ";
        }
    }
    return 0;
}