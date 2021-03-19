const { ['log']: c } = console;


let express = require("express");




let app = express();

app.use(express.static("public"));
app.use(express.json());


require('dotenv').config();

let USERNAME = process.env.USERNAME
let PASSWORD = process.env.PASSWORD
let CONNECTION = process.env.CONNECTION


const mongoose = require("mongoose");

const Entry = require("./models/entry")

const dbURI_connection_string = CONNECTION

app.listen(process.env.PORT || 3000)

mongoose.connect(dbURI_connection_string)







app.get("/most-recent", async (req, res) => {


    const criteria = await processInfo_TOP(mostRecent_DATABASE, res)



})






async function processInfo_TOP(mostRecent_DATABASE, res) {

    const promise = await getDatabase_PROMISE("array");

    console.log("processInfo_TOP")
    console.log("promise")
    console.log(promise)

    const reduced = await findSet_ALL(promise)


    console.log("reduced")
    console.log(reduced)

    const ordered = await sortArrays_DESCENDING(reduced)

    console.log("ordered")
    console.log(ordered)

    //const sort = await [ordered[0],ordered[1],ordered[2]]

    const sort = await getSlice(ordered)


    console.log("processInfo_TOP")
    console.log("sort")
    console.log(sort)


    const db = await mostRecent_DATABASE(sort, res)



}




















app.post("/loadMore", async (req, res) => {



    const onscreen = req.body[0]
 

    const database = await getDatabase_PROMISE("array")

    const nextSlice = await processInfo_GAPS(database, onscreen)





    if (nextSlice.length > 0) {


        const data = await mostRecent_DATABASE(nextSlice, res)

      

    }

    else if (nextSlice.length == 0) {

  
        const object = {

            NONE: "there are no more",
            NONE: "there are no more"

        }

        res.send(object)

    }


})




function processInfo_GAPS(database, onscreen) {


    const reduced = findSet_ALL(database);

    const ordered = sortArrays_DESCENDING(reduced)

    console.log(ordered)

    const gaps = isGap(onscreen, ordered)

    const package = getSlice(gaps)

    return package

    //[gaps[0], gaps[1], gaps[2]]

}





function getSlice(gaps) {

    array = []

    for (let i = 0; i < 3; i++) {


        if (gaps[i] !== undefined) {

            array.push(gaps[i])

        }


    }

    return array


}













function isGap(onscreen, reduced) {



    //copy = reduced.map((x) => x);
    let copy = [...reduced]

    let array = []

    for (let i = 0; i < reduced.length; i++) {

        const element = reduced[i];

        for (let j = 0; j < onscreen.length; j++) {

            if (onscreen[j][0] == reduced[i][0] && onscreen[j][1] == reduced[i][1]) {

                copy[i] = ["*", "*"]
                //console.log(copy)
                reduced.splice(i, 1)

            }

        }


    }

    // console.log(copy)
    console.log(reduced)
    return reduced

}







function sortArrays_DESCENDING(array) {


    for (let i = 0; i < array.length; i++) {

        for (let i = array.length - 1; i > 0; i--) {


            //if(array[i-1] !== undefined){



            if (compare(array[i], array[i - 1])) {

                let inter = array[i]
                array[i] = array[i - 1]
                array[i - 1] = inter


            }

            //}

        }

    }



    return array
}









function compare(current, next) {

    if (current[1] > next[1]) {

        return true

    }

    else if (current[1] == next[1]) {

        if (current[0] >= next[0]) {

            return true
        }


    }

    return false

}








function findSet_ALL(array) {


    console.log("Find set all")
    console.log("array")
    console.log(array)

    let set = []

    if (array.length == 1) {
        return array
    }


    for (let i = 0; i < array.length; i++) {

        for (let i = 0; i < array.length; i++) {

            if (array[i + 1] !== undefined) {



                if (!compare_EQUALITIES(array[i], set)) {

                    set.push(array[i])

                }
            }
        }
    }


    return set




    function compare_EQUALITIES(current, set) {

        bool = false


        for (let i = 0; i < set.length; i++) {


            if (current[0] == set[i][0] && current[1] == set[i][1]) {

                bool = true
                return true

            }

        }

        if (bool == false) {

            return false


        }

    }

}










function mostRecent_DATABASE(criteria, res) {
    console.log("")
    console.log("")
    console.log("criteria")
    console.log(criteria)
    console.log("")
    console.log("")
    array = [];
    let query;
    let filter = [];


    for (let i = 0; i < criteria.length; i++) {

        filter.push({ month: criteria[i][0], year: criteria[i][1] })

    };



    (criteria.length == 3) ? query = Entry.find({ $or: [filter[0], filter[1], filter[2]] }) : "";
    (criteria.length == 2) ? query = Entry.find({ $or: [filter[0], filter[1],] }) : "";
    (criteria.length == 1) ? query = Entry.find({ $or: [filter[0]] }) : "";
    (criteria.length == 0) ? query = console.log("there is nothing left") : "";




    if (criteria.length == 0) {

        res.send({})


    }



    else if (criteria.length !== 0) {

        query.sort({ date: -1 })

        query.exec(function (err, docs) {
            docs.forEach(function (data) {

                array.push(data)

            });

            res.send(array)


        })

    }
}










function getDatabase_PROMISE(mode) {


    return new Promise(async (resolve, reject) => {


        if (resolve) {



            let database = getDatabase(resolve, mode)



        }

        else if (reject) {




        }


    });

}





function getDatabase(resolve, mode) {

    console.log("the mode is ")
    console.log(mode)
    console.log("")

    let array = []
    let obj = {}

    Entry.find({}).sort({ month: -1, year: -1 }).exec(function (err, docs) {

        if (mode == "object") {

            for (let i = 0; i < docs.length; i++) {

                const data = docs[i];


                obj[i] = [data.month, data.year]

            }


            resolve(obj)

        }

        else if (mode == "array") {

            for (let i = 0; i < docs.length; i++) {

                const data = docs[i];


                array[i] = [data.month, data.year]

            }


            resolve(array)

        }


    })
}
























function findSet(array) {



    let set = [... new Set(array)]


    return set

}
























app.post("/post", (req, res) => {

    console.log("/post");



    const entry = new Entry({


        date: req.body.date,
        month: req.body.month,
        year: req.body.year,
        week: req.body.week,
        work: req.body.work,
        nonwork: req.body.nonwork,
        total: req.body.total,
        efficiency: req.body.efficiency




    })


    entry.save()
        .then((result) => {

            console.log("entry.save()")
            console.log("this is what is saved into the database:")
            console.log(result)
            console.log("sending the result back to the /post fetch")
            res.send(result)


        })
        .catch((err) => {

            console.log(err)

        })


})









app.post('/verify', (req, res) => {

    console.log(req.body)
    const entry = req.body;

    console.log(entry.username)
    console.log(entry.password)

    if (entry.username == USERNAME && entry.password == PASSWORD) {

        res.send(true)

    }

    else {

        res.send(false)



    }



})



































app.get("/deleteAll", (req, res) => {



    Entry.deleteMany({}).then(function () {
        console.log("Data deleted");



    })

})













app.post("/deleteThese", (req, res) => {


    // get the date month and year
    console.log("here is the request body")
    console.log(req.body)

    const deletes = req.body.deletes



    let object = {}

    for (let i = 0; i < deletes.length; i++) {
        const element = deletes[i];


        console.log("this is the ")
        console.log(i)
        console.log(element)

        console.log(element[0])
        console.log(element[1])
        console.log(element[2])



        Entry.deleteOne({ $and: [{ date: element[0] }, { month: element[1] }, { year: element[2] }] }).then(function () {
            console.log("Data deleted")
        })



    }



    res.send({ "fin": "fin" })


}

)







// this is unresponsive for some reason!!!

// DELETE ALL
app.get("/deleteAll", (req, res) => {

    console.log("triggered the deletion event")

    //Entry.remove({},{multi : true} );
    Entry.deleteMany({});
    res.end()


})





