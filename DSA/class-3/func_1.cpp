#include<iostream>
using namespace std;

int sum2( int a, int b){
    return a + b;
}

// int sum3( int a, int b, int c)
// {
//     return a +  b + c;
// }

// write a function  that takes one input integer n
// task of this function is to print numbers from 1 to n
void print1toN(int n)
{
    for(int i = 1; i<=n; i++)
    {
        cout<< i << " ";
    }
    cout<<endl;
}

int main(){
    int ans1 = sum2(5, 3); //8
    int ans2 = sum2(10,8); //18
    int ans3 = sum2(1, 5); //6

    cout<< ans1 <<" " <<ans2 << " "<< ans3<<endl;

    print1toN(10);

    print1toN(2);

    print1toN(7);


    


    return 0;
}