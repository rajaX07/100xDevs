#include<iostream>
using namespace std;

int main(){
    // cout<< "Helllo world" << endl;
    // cout<< "100xSchool"<< endl;
    // cout<< "100xDevs" << endl;

    // // we can write like this
    // cout<< "Hello world" << endl << "100xDevs" << endl << "100xSchool" <<endl;


    // Printing of Stars
    // cout<<"*"<<endl;
    // cout<<"**"<<endl;
    // cout<<"***"<<endl;
    // cout<<"****"<<endl;
    // cout<<"*****"<<endl;
    // cout<<"******"<<endl;


    // Arithmetic Operators
    // cout<< 10+3 << endl; // 13
    // cout<< 10-3 << endl; // 7
    // cout<< 10*3 << endl; // 30
    // cout<< 10/3 << endl; // 3 , if  we divide 10 integer, result will be integer so quotient is 3

    // cout<< 10%3 << endl; // 1 remainder 

    // Data Types
    // int, double, long long, char, bool

    
     // Taking Input from user
    //  int a, b;
    //  cin >> a >> b;
    //  cout << a + b << endl;


    //  Relation Operators
   bool ans1 = 1;// True -> 1
   bool ans2 = 0;  // False -> 0
   bool ans3 = 0 < 2; // true -> 1

   cout << ans1 << endl;
   cout << ans2 << endl;
   cout << ans3 << endl;

//    true --> 1 
//    false --> 0
// only 0 means false
// all other things is true(1) by default like  
// bool = -123 // true 

// conditional Statement

int n;
cin>> n;

if(n % 2 == 0)
{
    cout << "Even";
}
else{
    cout<< "Odd";
}
    return 0;

}

