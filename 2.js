// Learning Competencies

// Mampu mengakses array multidimensi Mampu membedakan tipe data number dan yang bukan Mampu menggunakan template literals
// Restrictions
// Tidak boleh menggunakan built-in function apapun dan regex, tidak boleh menggunakan toUppercase() & toLowerCase()

// Directions
// Diberikan sebuah function bernama seeker dimana function tersebut menerima satu parameter berupa array multidimensi.
// Function akan mengembalikan jumlah vokal dan kumpulan vokal yang ditemukan dari array multidimensi tersebut.
// Huruf vokal = ‘a’, ‘A’, ‘i’, ‘I’, ‘u’, ‘U’, ‘e’, ‘E’, ‘o’, ‘O’

let board = [["*", "*", "*", 10], ["*", "*", -5, -10, "*", 100], ["a", "A", "o", "b"]]


function vocalSeeker(board) {
    let vokal = "aiueoAIUEO"
    let jmlVokal = 0;
    let hasilVokal = ""
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            for (let k = 0; k < vokal.length; k++) {
                if (board[i][j] === vokal[k]) {
                    jmlVokal++;
                    hasilVokal += board[i][j]
                }
            }
        }
    }
    return (`vokal ditemukan ${jmlVokal} dan kumpulan vokal adalah ${hasilVokal}`)
}

console.log(vocalSeeker(board))