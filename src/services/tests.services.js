const mongoose = require('mongoose')

const Test = mongoose.model('Test')
const User = mongoose.model('User')

const getTests = () => {
    return Test.find()
}

const addTest = async (TestInfo) => {
    const testObj = await Test.create(TestInfo)
    // const test = testObj.toJSON()
    // if (test.name === TestInfo.name) {
    //     User.updateOne({ email: test.postedBy }, {
    //         $addToSet: {
    //             TestsPosted: Test._id
    //         }
    //     }).exec()
    // }
    return testObj
}

const deleteTest = async (id) => {
    const deletedTest = await Test.findByIdAndDelete(id)
    if (deletedTest._id.toString() === id) {
        User.updateOne({ email: deletedTest.postedBy }, {
            $pull: {
                TestsPosted: id
            }
        }).exec()
    }
}

const updateTest = (id, updateInfo) => {
    return Test.findByIdAndUpdate(id, updateInfo, { new: true })
}

const getTestById = (id) => {
    return Test.findById(id)
}

// const getTestByTag = (tag) => {
//     return Test.find({ tags: tag })
// }

// const getTestsByCategory = (category) => {
//     return Test.find({ category })
// }

// const updateVotes = async (TestId, options) => {
//     const { action, userId } = options
//     if (action === "upvote") {
//         const query = Test.updateOne({ _id: TestId }, {
//             $pull: {
//                 downvotedBy: userId
//             },
//             $addToSet: {
//                 upvotedBy: userId
//             }
//         })
//         await query.exec()
//     }

//     if (action === "downvote") {
//         const query = Test.updateOne({ _id: TestId }, {
//             $pull: {
//                 upvotedBy: userId
//             },
//             $addToSet: {
//                 downvotedBy: userId
//             }
//         })
//         await query.exec()
//     }
//     return Test.findById(TestId)
// }

const searchTests = (keyWord) => {
    return Test.find({
        $or: [
            {
                patientName: {
                    $regex: keyWord,
                    $options: 'i'
                }
            },
            {
                email: {
                    $regex: keyWord,
                    $options: 'i'
                }
            },
            {
                city: {
                    $regex: keyWord,
                    $options: 'i'
                }
            },
            {
                mobile: {
                    $regex: keyWord,
                    $options: 'i'
                }
            },
            {
                referredDoctor: {
                    $regex: keyWord,
                    $options: 'i'
                }
            },
            {
                collectionBoy: {
                    $regex: keyWord,
                    $options: 'i'
                }
            },
            {
                totalCost: {
                    $regex: keyWord,
                    $options: 'i'
                }
            },
            {
                balance: {
                    $regex: keyWord,
                    $options: 'i'
                }
            },
            {
                paymentMethod: {
                    $regex: keyWord,
                    $options: 'i'
                }
            },
            // {
            //     dob: {
            //         $eq: keyWord
            //     }
            // },   

        ]
    }).exec()
}


const findByDates = (start, end) => {
    return Test.find({
        registrationDate: {
            $lte: end,
            $gte: start
        }
    }).exec()
}

// const findByEmail = (email) => {
//     return Test.find({ postedBy: email }).exec()
// }

module.exports = {
    getTests,
    addTest,
    deleteTest,
    updateTest,
    getTestById,
    findByDates,
    // getTestByTag,
    // getTestsByCategory,
    // updateVotes,
    searchTests,
    // findByEmail
}