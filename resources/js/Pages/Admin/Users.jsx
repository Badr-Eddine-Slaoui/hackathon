
import AdminDashboardLayout from '@/Layouts/AdminDashboardLayout'

import React from 'react'

function Users() {
    return (
        <>
            <AdminDashboardLayout >
                <div className='main w-[100%] h-full'>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Avatar
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Users name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Role
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-center">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td class="px-6 py-4">
                                        Silver
                                    </td>
                                    <td class="px-6 py-4">
                                        Laptop
                                    </td>
                                    <td class="px-6 py-4">
                                        $2999
                                    </td>
                                    <td class="px-6 py-4 text-center">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-2">Edit</a>
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-2">Delete</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </AdminDashboardLayout>
        </>
    )
}

export default Users