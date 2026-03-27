#include <bits/stdc++.h>
using namespace std;

int main()
{
    // Hollow Pyramid
    // int n;
    // cin >> n;

    // for (int i = 1; i <= n; i++)
    // {
    //     for (int j = 1; j <= i; j++)
    //     {
    //         if (i == 1 || i == n || j == 1 || j == i)
    //         {
    //             cout << "*";
    //         }
    //         else
    //         {
    //             cout << " ";
    //         }
    //     }
    //     cout << endl;
    // }
    // Numbered Rectangle 
    // Logic: First draw the star pattern
    //        replace * with given input
    int n, m;
    cin >> n >> m;

    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= m; j++)
        {
            cout << i;
        }
        cout << endl;
    }

    return 0;
}
