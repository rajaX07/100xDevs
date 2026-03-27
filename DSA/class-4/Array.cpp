#include<iostream>
using namespace std;

int main(){
    //Array

    // int marks[10];

    // cin>> marks[1];
    // cin>> marks[2];
    // cin>> marks[3];
    // cin>> marks[4];
    // .
    // .
    // .
    // .
    // cin>> marks [9];

    // Taking Input
    // for(int i = 0; i<=9; i++){
    //     cin>> marks[i];
    // }
    // for(int i = 0; i<= 9; i++){
    //     cout<< marks[i]<<endl;
    // }


    // Create a an array with user input
    // int n;
    // cin>>n;

    // int arr[n];

    // for(int i = 0; i<=n-1; i++){
    //     cin>>arr[i];
    // }
    // for(int i = 0; i<=n-1; i++){
    //     cout<<arr[i]<<" ";
    // }


    //Revese an array
    // int n;
    // cin>>n;

    // int arr[n];

    // for(int i = 0; i<=n-1; i++){
    //     cin>>arr[i];
    // }
    // for(int i = n-1; i>=0; i--){
    //     cout<<arr[i]<<" ";
    // }
    

    //Sum of an array
    int n;
    cin>>n;

    int arr[n];

    for(int i = 0; i<=n-1; i++){
        cin>>arr[i];
    }

    int sum = 0;
    for(int i = 0; i<=n-1; i++){
        sum += arr[i];
    }
    cout<<sum<<endl;

    // we can do this i<n instead of i<=n-1


    


    
























    
    
    return 0;
}


