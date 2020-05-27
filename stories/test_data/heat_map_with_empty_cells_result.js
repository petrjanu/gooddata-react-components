// (C) 2020 GoodData Corporation
module.exports = projectId => {
    return {
        executionResult: {
            data: [["882", null, "788", "972"], ["594", "624", null, "873"], ["530", "858", "786", null]],
            headerItems: [
                [
                    [
                        {
                            attributeHeaderItem: {
                                uri: "/gdc/md/" + projectId + "/obj/5/elements?id=2",
                                name: "medium",
                            },
                        },
                        {
                            attributeHeaderItem: {
                                uri: "/gdc/md/" + projectId + "/obj/5/elements?id=1",
                                name: "low",
                            },
                        },
                        {
                            attributeHeaderItem: {
                                uri: "/gdc/md/" + projectId + "/obj/5/elements?id=3",
                                name: "high",
                            },
                        },
                    ],
                ],
                [
                    [
                        {
                            attributeHeaderItem: {
                                uri: "/gdc/md/" + projectId + "/obj/4/elements?id=1",
                                name: "Pink",
                            },
                        },
                        {
                            attributeHeaderItem: {
                                uri: "/gdc/md/" + projectId + "/obj/4/elements?id=2",
                                name: "Red",
                            },
                        },
                        {
                            attributeHeaderItem: {
                                uri: "/gdc/md/" + projectId + "/obj/4/elements?id=3",
                                name: "Purple",
                            },
                        },
                        {
                            attributeHeaderItem: {
                                uri: "/gdc/md/" + projectId + "/obj/4/elements?id=4",
                                name: "Salmon",
                            },
                        },
                    ],
                    [
                        {
                            measureHeaderItem: {
                                name: "Saved null",
                                order: 0,
                            },
                        },
                        {
                            measureHeaderItem: {
                                name: "Saved null",
                                order: 0,
                            },
                        },
                        {
                            measureHeaderItem: {
                                name: "Saved null",
                                order: 0,
                            },
                        },
                        {
                            measureHeaderItem: {
                                name: "Saved null",
                                order: 0,
                            },
                        },
                    ],
                ],
            ],
            paging: {
                count: [3, 4],
                offset: [0, 0],
                total: [3, 4],
            },
        },
    };
};
