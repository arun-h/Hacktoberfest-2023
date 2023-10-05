#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int main()
{
    int n;
    int i,j;


    printf("Enter number of elements you want to store: ");
    scanf("%d" ,&n);

    int arr[n];

    //getting inputs to the array from user
    for(i=0 ;i<n ;i++){
        printf("Enter number%d: ",i+1);
        scanf("%d" ,&arr[i]);
    }

    //displaying unsorted array
    for(i=0 ;i<n ;i++){
      printf("%d \t" ,arr[i]);
    }

    printf("\n");
    //array we have entered
    //arr[5] = 12,2,41,20,22

    //sorting by using bubble sort method
    int temp;
    for(i=0 ;i<n-1 ;i++){ //outer-loop is for iterate through passes

        for(j=0; j<n-i-1; j++){ //inner-loop is for iterate through adjacent values within a pass
            if(arr[j]>arr[j+1]){
                temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }

    }
    printf("\n");

    //displaying the sorted array
    for(i=0 ;i<n ;i++){
      printf("%d \t" ,arr[i]);
    }


}
