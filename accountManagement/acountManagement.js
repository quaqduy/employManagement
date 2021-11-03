const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const boxInforUserName = $('#viewInfor .boxInforUserName');
const boxInforFullName = $('#viewInfor .boxInforFullName');
const boxInforPhoneNumber = $('#viewInfor .boxInforPhoneNumber');
const boxInforBirthday = $('#viewInfor .boxInforBirthday');
const boxInforEmail = $('#viewInfor .boxInforEmail');
const boxInforAddress = $('#viewInfor .boxInforAddress');
const boxInforProvince = $('#viewInfor .boxInforProvince');
const boxInforWard = $('#viewInfor .boxInforWard');
const viewInforBox = $('#viewInfor');
const listViewBox = $('.listView-employees');
const addInfor = $('#addInfor');
const addUserName = $('#addUserName');
const addFullName = $('#addFullName');
const addPosition = $('#addPosition');
const addItem = $('#addItem');


const listData = [{
    fullName: 'Nguyen Van A',
    position: 'IT',
    email: 'VanA@gmail.com',
    id: 'IT1',
    userName: 'ANguyen',
    phoneNumber: '012345863',
    birthDay: '2021-11-19',
    address: '3A Nguyen Van Troi',
    province: 'Lam Dong',
    ward: '9',
    password: 'aaaaaaa'

}, {
    fullName: 'Nguyen Van B',
    position: 'seller',
    email: 'VanB@gmail.com',
    id: 'S1',
    userName: 'BNguyen',
    phoneNumber: '012345093',
    birthDay: '2021-11-19',
    address: '3B Nguyen Huu Tho',
    province: '',
    ward: 'Phu My',
    password: 'aaaaaaa'
}, {
    fullName: 'Nguyen Van C',
    position: 'IT',
    email: 'VanC@gmail.com',
    id: 'IT2',
    userName: 'CNguyen',
    phoneNumber: '012635863',
    birthDay: '2021-11-19',
    address: '3A Bui Thi Xuan',
    province: 'Lam Dong',
    ward: '10',
    password: 'aaaaaaa'
}]



const listViewBoxHandler = {
    data: [],
    render(data) {
        const htmls = data.map((item, index) => {
            return `
                <div class="item item-layout">
                    <div class="nameField flex2">${item.fullName}</div>
                    <div class="positionField flex1">${item.position}</div>
                    <div class="emailField flex2">${item.email}</div>
                    <div class="IDField flex1">${item.id}</div>
                    <div class="toolsField flex2">
                        <svg onclick="listViewBoxHandler.takeData('${item.id}')" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill informationOfEmploy" viewBox="0 0 16 16">
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                          </svg>
                          <svg onclick="listViewBoxHandler.ask('${item.id}')" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                          <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                        </svg>
                    </div>
                </div>
            `
        });
        const textBefore = listViewBox.innerHTML;
        listViewBox.innerHTML = textBefore + htmls.join('');
    },
    takeData(id) {
        const takingItem = this.data.filter((item) => {
            return item.id === id;
        })
        boxInforUserName.innerText = takingItem[0].userName;
        boxInforFullName.innerText = takingItem[0].fullName;
        boxInforPhoneNumber.innerText = takingItem[0].phoneNumber;
        boxInforBirthday.innerText = takingItem[0].birthDay;
        boxInforEmail.innerText = takingItem[0].email;
        boxInforProvince.innerText = takingItem[0].province;
        boxInforWard.innerText = takingItem[0].ward;
        boxInforAddress.innerText = takingItem[0].address;

        viewInforBox.classList.remove('d-none');
    },
    viewBoxInforOnclose() {
        const viewInforClose = $('#viewInfor .viewInfor__close');
        viewInforClose.onclick = (e) => {
            viewInforBox.classList.add('d-none');
        };

    },
    ask(id) {
        const takeAgree = $('#takeAgree');
        takeAgree.classList.remove('d-none');
        this.resetPass(id);
    },
    resetPass(id) {
        const yes = $('.takeAgreeBox__answer .yes');
        const no = $('.takeAgreeBox__answer .no');
        yes.onclick = (e) => {
            let name;
            listData.map((item) => {
                if (item.id === id) {
                    item.password = item.userName;
                    name = item.fullName;
                }
            })
            takeAgree.classList.add('d-none');
            alert(`${name} password account is reseted`);
        }
        no.onclick = (e) => {
            takeAgree.classList.add('d-none');
        }

    },
    openCloseFormAddInfor() {
        const addInforBtn = $('#container .addItemOption');
        addInforBtn.onclick = (e) => {
            addInfor.classList.remove('d-none');
        }

        const closeFormAddInfBtn = $('#addInfor .viewInfor__close');
        closeFormAddInfBtn.onclick = (e) => {
            addInfor.classList.add('d-none');
        }
        this.addInforHandler();
    },
    defaultRender() {
        listViewBox.innerHTML = `
                <div class="itemTitle item-layout">
                    <div class="nameField flex2">Full name</div>
                    <div class="positionField flex1">Position</div>
                    <div class="emailField flex2">Email</div>
                    <div class="IDField flex1">ID</div>
                    <div class="toolsField flex2"></div>
                </div>
        `
    },
    addInforHandler() {
        const addItemBtn = $('#addInfor .addInf');
        addItemBtn.onclick = (e) => {
            addItem.onsubmit = (e) => {
                e.preventDefault();
            }
            listData.push({
                fullName: addFullName.value,
                position: addPosition.value,
                email: '',
                id: '',
                userName: addUserName.value,
                phoneNumber: '',
                birthDay: '',
                address: '',
                province: '',
                ward: '',
                password: addFullName.value
            });
            listViewBoxHandler.defaultRender()
            listViewBoxHandler.data = listData;
            listViewBoxHandler.render(listViewBoxHandler.data);
            alert('The account has been added!!');
        }
    },
    stillAddOrNot() {

    },
    start(listData) {
        this.data = listData;
        this.render(listViewBoxHandler.data);
        this.viewBoxInforOnclose();
        this.openCloseFormAddInfor();
    }
}

listViewBoxHandler.start(listData);