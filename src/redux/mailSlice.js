import { createSlice } from "@reduxjs/toolkit";


const mailSlice = createSlice({
    name: 'mail',
    initialState: {
        selectedMail: null,
        inboxMails: [
            {
                id: 1,
                adress: "Twitch",
                subject: "Hello, it's subject",
                description: "Test message body",
                time: "21 February 2022 15:32",
                direction: "Вам от "
            },
            {
                id: 2,
                adress: "Twix",
                subject: "Тема сообщения",
                description: "Большой текст сообщения Большой текст сообщения Большой текст сообщения Большой текст сообщения",
                time: "12 May 2022 13:42",
                direction: "Вам от "
            },
            {
                id: 3,
                adress: "Jake",
                subject: "Большая тема сообщения Большая тема сообщения Большая тема сообщения Большая тема сообщения",
                description: "Test message body",
                time: "05 June 2022 18:23",
                direction: "Вам от "
            },
        ],
        sentMails: [
            {
                id: 1,
                adress: "Anna",
                subject: "Hello, it's subject",
                description: "Test message body",
                time: "07 December 2022 12:20",
                direction: "От Вас для "
            },
            {
                id: 2,
                adress: "Rex",
                subject: "Hello, it's subject",
                description: "message body",
                time: "9 March 2022 20:12",
                direction: "От Вас для "
            },
        ],
        trashMails: [
            {
                id: 1,
                adress: "Twitch",
                subject: "Hello, it's subject",
                description: "Test message body",
                time: "19 September 2022 21:12",
                direction: "Вам от "
            },
        ]
    },
    reducers: {
        selectMail(state, action) {
            state.selectedMail = action.payload;
        },
        addMail(state, action) {

            if (action.payload.adress.length > 4 && action.payload.subject.length >= 3 && action.payload.description.length >= 1) {
                state.sentMails.unshift({
                    id: state.sentMails.length + 1,
                    adress: action.payload.adress,
                    subject: action.payload.subject,
                    description: action.payload.description,
                    time: new Date().toISOString(),
                    direction: "От Вас для "
                })
            }
            else if (action.payload.adress === "Себе" && action.payload.subject.length >= 3 && action.payload.description.length >= 1) {
                state.sentMails.unshift({
                    id: state.sentMails.length + 1,
                    adress: action.payload.adress,
                    subject: action.payload.subject,
                    description: action.payload.description,
                    time: new Date().toISOString(),
                    direction: "От Вас для "
                });
                state.inboxMails.unshift({
                    id: state.sentMails.length + 1,
                    adress: action.payload.adress,
                    subject: action.payload.subject,
                    description: action.payload.description,
                    time: new Date().toISOString(),
                    direction: "От Вас для "
                })

            }
            else { alert("Недопустимое минимальное количество символов: адресат - 5, тема - 3, текст письма - 1") }

        },
        removeFromInbox(state, action) {

            state.inboxMails = state.inboxMails.filter(mail => mail.id !== action.payload.id);
            state.trashMails.unshift({
                id: state.trashMails.length + 1,
                adress: action.payload.adress,
                subject: action.payload.subject,
                description: action.payload.description,
                time: action.payload.time,
                direction: action.payload.direction
            })
        },
        removeFromSent(state, action) {

            state.sentMails = state.sentMails.filter(mail => mail.id !== action.payload.id);
            state.trashMails.unshift({
                id: state.trashMails.length + 1,
                adress: action.payload.adress,
                subject: action.payload.subject,
                description: action.payload.description,
                time: action.payload.time,
                direction: action.payload.direction
            })
        },
        removeFromTrash(state, action) {

            state.trashMails = state.trashMails.filter(mail => mail.id !== action.payload.id);
        },

    }
})

export const { selectMail, addMail, removeFromSent, removeFromInbox, removeFromTrash } = mailSlice.actions;

export default mailSlice.reducer;