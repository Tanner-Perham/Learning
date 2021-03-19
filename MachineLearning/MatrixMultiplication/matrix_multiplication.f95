
program matrix_multplication
    !Get dimensions of matrices
    integer :: i, j, k
    integer :: x, y, z
    integer, allocatable :: A(:,:), B(:,:), C(:,:)
    x = 1   !rows of A
    y = 16   !cols of A & rows of B
    z = 10000   !cols of B
    allocate(A(x,y), B(y,z), C(x, z))
    do i = 1,x
        do j = 1,y
            A(i, j) = 2
        end do
    end do

    do i = 1,y
        do j = 1,z
            B(i, j) = 3
        end do
    end do

    C = matmul(A, B)

    print*, C, 'done!'
    

end program matrix_multplication
