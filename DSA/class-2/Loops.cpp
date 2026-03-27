#include <iostream>
using namespace std;

int main()
{
    // Loops

    // cout<< 1 <<endl; // with numbers "" is optional
    // cout<< 2 <<endl;
    // cout<< 3 <<endl;
    // cout<< 4 <<endl;
    // cout<< 5 <<endl;

    // While Loops

    // int i = 1;
    // while(i <= 10){
    //     cout<< i << endl;
    //     i++;
    // }

    // int n;
    // cin>>n;

    // int i = 1;
    // while(i<= n){
    //     cout<< i <<endl;
    //     i++;
    // 

    // Print N to 1
    //  int n;
    //  cin>> n;

    // int i = n;
    // while(i >= 1){
    //     cout << i << endl;
    //     i--;
    // }

    // Print all even from 1 to M
    // int m;
    // cin>>m;

    // int i = 1;
    // while(i <= m){
    //     if(i % 2==0){
    //         cout<< i <<endl;
    //     }
    //     i++;

    // }

    // Print all Uppercase (A-Z)
    // ASCII value, it every charachter has assigned some value
    // char ch = 'A';
    // while (ch <= 'Z')
    // {
    //     cout << ch << endl;
    //     ch++;
    // }

    // Print Multiplication Table
    //  int n;
    //  cin>>n;

    // int i = 1;
    // while(i <= 10){
    //     cout<<n<<"*"<<i<<"="<<n*i<<endl;
    //     i++;
    // }

    // whenever we divide
    //    n % 10 = the last digit(remiander)
    //    n / 10 = quoteint

    
    // Print Number in reverse
    // int N;
    // cin >> N;

    // while (N != 0)
    // {
    //     cout << N % 10;     //Logic is here for all below code
    //     N = N / 10;         //Logic is here for all below code
    // }


    // Digit Sum

    // int sum = 0;

    // int n;
    // cin>>n;

    // while(n != 0){
    //     sum += n%10;
    //     n = n/10;
    // }
    // cout<< sum << endl;

    // Reverse and store in a variable
    // int ans = 0;

    // int n;
    // cin>>n;

    // while(n!=0){
    //     ans = (ans*10) + n%10;
    //     n = n/10;

    // }
    // cout<<ans<<endl;


    //Palindrome : running back again
    int rev = 0;

    int n;
    cin>>n;

    int temp = n;

    while(n!=0){
        rev = (rev*10) + n%10;
        n = n/10;
    }
    if(rev == temp){
        cout<<"Yes";
    }else{
        cout<<"No";
    }
}