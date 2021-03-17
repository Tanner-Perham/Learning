
program matrix_multplication
    !Get dimensions of matrices
    integer :: i, j, k
    integer, allocatable :: A(:,:), B(:,:), C(:,:)
    i = 2   !rows of A
    j = 3   !cols of A & rows of B
    k = 2   !cols of B
    allocate(A(i,j), B(j,k), C(i, k))


end program matrix_multplication
