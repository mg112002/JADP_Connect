// const path = require('path')
const TestsService = require('../services/tests.services')
const { Errors } = require('../constants')

const getTests = async (req, res) => {
    const tests = await TestsService.getTests()
    res.json({
        status: 'success',
        data: tests
    })
}

const postTest = async (req, res, next) => {
    try {
        const test = await TestsService.addTest(req.body)

        res.status(201).json({
            status: 'success',
            data: test
        })
    } catch (error) {
        next(error)
    }
}

const deleteTest = async (req, res, next) => {
    const { id } = req.params

    try {
        const deletedTest = await TestsService.deleteTest(id);

        if (deletedTest === null) {
            const error = new Error(`A test with id = ${id} does not exist`);
            error.name = Errors.NotFound;
            return next(error);
        }
        res.json({
            status: 'success',
            data: null
        });
    } catch (error) {
        next(error);
    }
}

const updateTest = async (req, res, next) => {
    const { id } = req.params

    try {
        const updatedTest = await TestsService.updateTest(id, req.body)

        if (updatedTest === null) {
            const error = new Error(`A test with id = ${id} does not exist`);
            error.name = Errors.NotFound;

            return next(error);
        }

        res.json({
            status: 'success',
            data: updatedBlog
        })
    } catch (error) {
        next(error)
    }
}

const searchTestsByKey = async (req, res, next) => {
    try {
        const Tests = await TestsService.searchTests(req.query.keyWord)

        res.json({
            status: 'success',
            data: Tests
        })
    } catch (error) {
        next(error)
    }
}

const searchTestsByDates = async (req, res, next) => {
    try {
        const { start, end } = req.query
        const Tests = await TestsService.findByDates(start, end)

        res.json({
            status: 'success',
            data: Tests
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getTests,
    postTest,
    // getTestById,
    // getBlogByTag,
    deleteTest,
    updateTest,
    // getBlogByCategory,
    // voteBlog,
    searchTestsByKey,
    searchTestsByDates
    // getByEmail
}








// const getTestById = async (req, res, next) => {
//     const { id } = req.params

//     try {
//         const match = await TestsService.getTestById(id)


//         if (!match) {
//             const error = new Error(`A workshop with id = ${id} does not exist`)
//             error.name = Errors.NotFound;

//             next(error);
//             return;
//         }

//         res.json({
//             status: 'success',
//             data: match
//         });
//     } catch (error) {
//         next(error);
//     }
// }

// const getByEmail = async (req, res, next) => {
//     const { email } = req.params
//     try {
//         const Tests = await TestsService.findByEmail(email)

//         res.json({
//             status: 'success',
//             data: Tests
//         })
//     } catch (error) {
//         next(error)
//     }
// }


// const getBlogByTag = async (req, res, next) => {
//     const { tag } = req.params
//     try {
//         const Tests = await TestsService.getBlogByTag(tag)
//         res.json({
//             status: 'success',
//             data: Tests
//         })
//     } catch (error) {
//         next(error);
//     }
// }


// const getBlogByCategory = async (req, res, next) => {

//     let { category } = req.params
//     if (category === 'CS') {
//         category = 'C#'
//     }
//     try {
//         const Tests = await TestsService.getTestsByCategory(category)

//         res.json({
//             status: 'success',
//             data: Tests
//         })
//     } catch (error) {
//         next(error)
//     }
// }

// const voteBlog = async (req, res, next) => {
//     const { id } = req.params

//     try {
//         const blog = await TestsService.updateVotes(id, req.query)

//         res.json({
//             status: 'success',
//             data: blog
//         })
//     } catch (error) {
//         next(error)
//     }
// }