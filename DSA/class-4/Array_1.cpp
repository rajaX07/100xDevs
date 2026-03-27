#include<iostream>
using namespace std;

int main(){
    
// Find the Max of the Array
// int nums[] = {1, 4, 8, 7, 9, 3};
// int size = 6;

// int Max = nums[0], location = 1;
// for(int i = 1; i < size; i++)
// {
//     if(nums[i]>Max)
//     {
//         Max = nums[i];
//         location = i+1;

//     }
// }
// cout<< Max <<endl;
// cout<< location <<endl;




// Search in Array
    int n;
    cin>>n;
    
    int target;
    cin>>target;
    
    int arr[n];
    for(int i = 0; i<n; i++)
    {
        cin>>arr[i];
    }
    // Searching element in array
    bool isSearch = false;
    for(int i = 0; i<n; i++)
    {
        if(arr[i] == target)
        {
            isSearch = true;
            break;
        }
    }
    if(isSearch)
    {
        cout<<"Yes"<<endl;
    }
    else
    {
        cout<<"No"<<endl;
    }







    return 0;
}