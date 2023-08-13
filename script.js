const users = [
    { id: 1, name: 'Amin', family: 'Saeedi Rad' },
    { id: 2, name: 'Amir', family: 'Zehtab' },
    { id: 3, name: 'Qadir', family: 'Yolme' },
    { id: 4, name: 'Babak', family: 'Mohammadi' },
    { id: 5, name: 'Hasan', family: 'Ghahreman Zadeh' },

    { id: 6, name: 'Amin', family: 'Saeedi Rad' },
    { id: 7, name: 'Amir', family: 'Zehtab' },
    { id: 8, name: 'Qadir', family: 'Yolme' },
    { id: 9, name: 'Babak', family: 'Mohammadi' },
    { id: 10, name: 'Hasan', family: 'Ghahreman Zadeh' },

    { id: 11, name: 'Saeed', family: 'Ehsani' },
    { id: 12, name: 'Siamak', family: 'Modiri' },
    { id: 13, name: 'Mohsen', family: 'Ansari' },
    { id: 14, name: 'Mehran', family: 'Ali Pour' },
    { id: 15, name: 'Amir Hossein', family: 'Mahtabi' },

    { id: 16, name: 'Hossein', family: 'Amino' },
    { id: 17, name: 'Melika', family: 'Ehsani' },
    { id: 18, name: 'Qadir', family: 'Yolme' },
    { id: 19, name: 'Fatemeh', family: 'Alilou' },
    { id: 20, name: 'Ehsan', family: 'Tayyebi' },

    { id: 21, name: 'Zahra', family: 'Gholami' },
    { id: 22, name: 'Matin', family: 'Sahebi' },

];

const listContainer = document.getElementById('list'),
    paginationContainer = document.getElementById('pagination');


let currentPage = 1 //صفحه فعلی 
let rowsCount = 5 //تعداد یوزر در هر صفحه

const displayUserList = (usersArray, listContainer, currentPage, rowsCount) => {
listContainer.innerHTML = ''
    let endIndex = rowsCount * currentPage
    let startIndex = endIndex - rowsCount


    let paginatedUsers = usersArray.slice(startIndex, endIndex)

    paginatedUsers.forEach(user => {

        let userElm = document.createElement('div')
        userElm.classList.add('item')
        userElm.innerHTML = `${user.name} ${user.family}`
        listContainer.appendChild(userElm)

    });
}

const setupPagination = (usersArray, rowsCount, paginationContainer) => {
    paginationContainer.innerHTML = ''
    let pageCount = Math.ceil(usersArray.length / rowsCount)
    for (i = 1; i < pageCount + 1; i++) {
        let btn = paginationButtonGenerator(i, usersArray)
        paginationContainer.appendChild(btn)
    }
}

const paginationButtonGenerator = (page, usersArray) => {
    let button = document.createElement('button')
    button.innerHTML = page

    if (page === currentPage) {
        button.classList.add('active')
    }
    button.addEventListener('click', () => {
        currentPage = page
        displayUserList(usersArray, listContainer, currentPage, rowsCount)
        let prevPgae = document.querySelector('button.active')
        prevPgae.classList.remove('active')
        button.classList.add('active')
    })
    return button
}
displayUserList(users, listContainer, currentPage, rowsCount)
setupPagination(users, rowsCount, paginationContainer)